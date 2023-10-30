# XBee Sensor Management
This folder contains the gateway application for managing XBee sensors.

## Setup
In the following chapter, we will discuss how you can run the management tool.

### General Usage
To use this management tool, you need to have a few dependencies installed:

- Python 3
- pip

Once you have these dependencies installed, you can install the application. This can be done with the following command:

python -m pip install -r ./requirements.txt

Once you have done this, you can run the application. To do that, please proceed to the "Running the Application" section.

### Development
For the development of the frontend, you will need two extra dependencies:

- Node.js
- npm

To install these development dependencies, go to the "front" folder and execute the command:

npm install

The frontend is developed using the Svelte framework with TypeScript and uses Vite as a bundler/compiler.

To build the frontend, execute the command:

npm run build

## Running the Application
To run the application, you need to ensure you have configured and connected a few things first.

### Configure the XBee
To configure the application to use the correct XBee, you first need to connect the XBee and find the COM port it is connected to. You can find this information in Device Manager.

Once you have the COM port, you need to modify the config.toml file and replace the COM port you have used.

### Starting the Application
Once you have successfully configured the application, you can launch it using the following command. To stop it, simply press Ctrl + C while in the terminal window:

python -m uvicorn main:app --port 8080

After executing this command, a webserver will be available at the IP of the device on port 8080.

### Connecting Sensors to the Network
Once the server is running, the next step is to connect devices to the network. To do this, simply access the website and press the "Start Device Scan" button. When this button is pressed, the application will search for new devices for the next 20 seconds, or as otherwise configured in config.toml as "discovery_time" (minimum 4 seconds, maximum 24 seconds).

Once a sensor is connected, you will start to see messages from the connected sensors. If the name of the sensor is null or undefined, you need to connect the device again. This can be done by simply pressing the "Start Device Scan" button.

## Console Messages
When the application is running, you can find the following messages in the console:

- "New device found {address}": This message is sent to the console when a device is connected to the network. It is shown at the debug level (info and debug). The address in the message is the MAC address of the connected sensor.
- "Received data from {address}: {data}": This message is sent to the console when new data is received. This message will only be seen when the log level is set to debug. The address is the address of the sensor that sent it, and the data is the decoded message that it has sent.

To configure the log level, you can change the "console.log_level" in the configuration file.

Contributors
- [Michel Gerding](https://github.com/MichelGerding)
