<script lang="ts">
    const url = 'ws://' + location.host + '/ws/connect_devices';
    let ws = new WebSocket(url);

     let connecting = false;
     $: message = connecting ? "Scanning for devices" : "Start device scan"

    ws.onopen = () => {
        console.log('ws opened')
    }

    ws.onmessage = (message) => {
         console.log(message)
        let msg = JSON.parse(message.data);
        connecting = msg.connecting
    }

</script>


<button
    on:click={() => { ws.send(JSON.stringify({connect: true}))}}>
    {message}
</button>

<style>
    button {
        background: white;
        color: black;

        height: fit-content;

        padding: 1em 2ch;
    }
</style>