from machine import ADC, I2C
from bme280 import BME280
import xbee
import time

"""
          GPIO CONNECTIONS             
        GND             D00 ADC CSM
        3.3V            D01 I2C SCL
        nc              nc
        nc              nc
        nc              nc
        nc              nc
        nc              nc
I2C SDA D11             nc
        nc              nc
        nc              nc
        nc              nc
                usb
"""

# GLOBAL CONFIG
CONFIG = {
    "SMC": {
        "PIN": "D0"
    },
    "BME": {
        "ADDR": 0x76
    },
    "ADC": {
        "MAX_VALUE": 4096
    }
}


def get_soil_moister_percent(pin: ADC):
    """
        Read the amount of water in the soil.
        0% should be completely dry and 100% should be completely saturated

        This is calculated using the following formulat: (2.48 / VOLTAGE) - 0.72
        This formula is taken from the following blogpost:
        https://makersportal.com/blog/2020/5/26/capacitive-soil-moisture-calibration-with-arduino
    """
    v = pin.read() / CONFIG["ADC"]["MAX_VALUE"] * CONFIG["REVERENCE_VOLTAGE"]
    return (((1 / v) * 2.48) - 0.72) * 100


def setup():
    # get the internal reference voltage
    try:
        av = xbee.atcmd("AV")
    except KeyError:
        av = None
    CONFIG["REVERENCE_VOLTAGE"] = {0: 1.25, 1: 2.5, 2: 3.3, None: 2.5}[av]

    print("Configured Analog Digital Reference: AV:{}, {} V".format(
        av,
        CONFIG["REVERENCE_VOLTAGE"])
    )


def measurement_to_message(measurement):
    """
        convert the measurement to binary to send it broadcast it.

        the message is structered as follows: {measurement; bytes}
        {soil; 2}, {pressure; 5}, {humidity; 2}, {temp; 2}

        to convert it back you can simply bitshift right it and then
        binary and the value to get the measurement:
        {soil;bitshift >> 44}, {pressure >> 24 && 1048575},
        {humidity >> 16 && 255}, {temperature && 255}
    """

    bits = measurement["soil"] << 44
    bits = bits + (measurement["pressure"] << 24)
    bits = bits + (measurement["humidity"] << 16)
    return (bits + measurement["temperature"]).to_bytes(2 + 5 + 2 + 2, 'big')




def take_and_send_message(smc: ADC, i2c: BME280, dest):
    """
        take a measurement from sensors and send it to the specified address
    """
    measurement = {
        "soil": int(get_soil_moister_percent(smc)),
        "pressure": int(i2c.read_pressure() / 256),
        "humidity": int(i2c.read_humidity() / 1024),
        "temperature": (int(i2c.read_temperature() / 100)),
    }

    message = measurement_to_message(measurement)

    print("Received new measurement: ")
    print(measurement)
    print("sending as ", message)

    xbee.transmit(dest, message)


def main():
    setup()

    smc = ADC(CONFIG["SMC"]["PIN"])

    i2c = I2C(1)
    print(i2c.scan())

    if not (CONFIG["BME"]["ADDR"] in i2c.scan()):
        print("bme280 not found")
        return;
    bme = BME280(i2c=i2c)

    while True:
        take_and_send_message(smc, bme, xbee.ADDR_BROADCAST)
        time.sleep(1)


main()
