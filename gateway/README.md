# XBee sensor management
this folder contains the gateway application for the Xbee sensor management. 

## Setup 
in the following chapter we will discuss how you can run the management tool. 

### general usage 
To use this management tool you need to have a few dependencies installed

- Python 3
    - pip

once you have these dependencies installed you can install the application./ this can be done with the following command.

```bash
python -m pip install -r ./requirements.txt
```
once you have done this you can run the appllication to do that you can continue to `running the application`


### development
for the development of the frontend you will need 2 extra dependencies 
- nodejs
- npm 

to install the development you can go to the front folder and execute the command 

```bash
npm install
```

the frontend is developed using the svelt framework with typescritp and uses vite as bundeler/compiler

to buld the frontend you can execute the command

```bash
npm build
```

## running the application 
to run the application you need to ensure you have configured and connected a couple things first. 

### configure the xbee
to configure the application to use the correct xbee you first need to connect the xbee and get the COM port it is connected to. this can be found in device manager. 

once you have the com port you need to modify the `config.toml` file and replace the COM port you have used. 


### starting the application
once you have done this succesfully configured the application you can lauch it using the following command. to stop it simply press ctrl + c while in the window of the terminal

```bash
python -m uvicorn main:app  --port 8080
```

once this commadn is executed a webserver will be available at the ip of thje device on port 8080

### connecting sensors to the network
once the server is running the next step you need to do is connnect devices to the network. 
to do this you simply need to access the website and press the button `start device scan`.
once this button is pressed it will look foir new devices for the following 20 seconds or otherwise configered in `config.toml` as `discorvery_time` minimum 4 sec max 24 secxonds. 

once the sensaor is connected you will start to see the messages of the connected sensors come in. if the name of the sensor is null or undefined you need to connect the device again because it was connected from a previous session. this can be done by simply pressing the `start device scan button`.

## console messages 
when the applicationis running you can find the following messages in the console.

- `new device found {address}`: this message is send to the console when a device is connected to the network. this is shown at the debug level info and debug. the address in the message is the mac address of the connected sensor
- `Received data from {address}: {data}`: this message is send to the console when new data is recieved. this message will only be seen when the log level is set to debug. the address is the address of the sensor that send it and the data is the decoded message that it has send. 

to configure the log level you can change the `console.log_level` in the configuration file. 


## contributers 
- [Michel Gerding](https://github.com/MichelGerding)