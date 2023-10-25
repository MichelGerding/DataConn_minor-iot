import toml
import asyncio

from fastapi import FastAPI, WebSocket
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from digi.xbee.devices import XBeeDevice, DiscoveryOptions
from xbee_helpers import message_to_measurement
from logger import Logger


config = toml.load('./config.toml')
logger = Logger(config['console']['log_level'])

loop = None

class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        try:
            self.active_connections.remove(websocket)
        except:
            pass
    async def broadcast(self, message):
        for connection in self.active_connections:
            try:
                await connection.send_json(message)
            except:
                self.disconnect(connection)

ws_search_device_manager = ConnectionManager()
ws_data_manager = ConnectionManager()


#################################
########### SETUP XBEE ##########
#################################
def discovery_finished(status):
    stop_connections()


def data_received(xbee_message):
    address = xbee_message.remote_device.get_node_id()
    data = message_to_measurement(xbee_message.data)
    logger.debug(f"Received data from {address}: {data} ")

    data["name"] = address
    data["mac"] = str(xbee_message.remote_device.get_64bit_addr())


    asyncio.run(
        ws_data_manager.broadcast(data),
    )

connected_nodes = []


def new_dev_discovered(remote):
    addr = remote.get_64bit_addr()
    if not (addr in connected_nodes):
        address = remote.get_node_id()
        logger.info(f'new device found {address}')
        xnet.add_remote(remote)

        connected_nodes.append(addr)

xbee = XBeeDevice(config['xbee']['port'], 9600)


xbee.open()
xbee.add_data_received_callback(data_received)
xnet = xbee.get_network()
xnet.set_discovery_timeout(config['xbee']['discorvery_time'])
xnet.set_discovery_options({DiscoveryOptions.DISCOVER_MYSELF,
                            DiscoveryOptions.APPEND_DD})

xnet.add_device_discovered_callback(new_dev_discovered)
xnet.add_discovery_process_finished_callback(discovery_finished)

app = FastAPI()

#################################################################
#################################################################
########################### WEBSERVER ###########################
#################################################################
#################################################################

# Define our static folder, where will be our svelte build later
app.mount("/assets", StaticFiles(directory="public/assets"), name="static")


# Simply the root will return our Svelte build
@app.get("/", response_class=FileResponse)
async def main():
    return "public/index.html"


connecting = False


async def new_connections():
    global connecting
    global xnet

    if not connecting:
        connecting = True

        logger.debug('now listenting for new connection')
        await ws_search_device_manager.broadcast({'connecting': connecting})

        xnet.start_discovery_process()

def stop_connections():
    global connecting

    if connecting:
        connecting = False
        logger.debug('stop listenting to new connections')

        asyncio.run(
            ws_search_device_manager.broadcast(
                {'connecting': connecting}
            )
        )

@app.websocket("/ws/connect_devices")
async def ws_connect_devices(websocket: WebSocket):

    await ws_search_device_manager.connect(websocket)

    await websocket.send_json({"connected": connecting})

    try:
        while True:
            data = await websocket.receive_json()
            if data['connect']:
                await new_connections()
    except:
        ws_data_manager.disconnect(websocket)

@app.websocket("/ws/data")
async def ws_connect_devices(websocket: WebSocket):
    global loop
    if not loop:
        loop = asyncio.get_event_loop()

    await ws_data_manager.connect(websocket)

    try:
        while True:
            await websocket.receive()
    except:
        ws_data_manager.disconnect(websocket)