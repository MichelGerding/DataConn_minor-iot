def message_to_measurement(message):
    """
        Decode the message containing the sensor data according to the data decoding
         scheme provided by the encode function
    """
    v = int.from_bytes(message, 'big')
    return {
        'soil': v >> 44,
        'pressure': v >> 24 & 1048575,
        'humidity': v >> 16 & 255,
        'temperature': v & 255
    }
