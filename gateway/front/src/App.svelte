<script lang="ts">
    import Button from "./lib/Button.svelte";
    import ActionableTable from "./lib/table/ActionableTable.svelte";

    import {defaultFormat} from "./lib/table/tableFunctions";

    let ws = new WebSocket('ws://localhost:8000/ws/data');

    let allMeasurements: any = {}

    ws.onopen = () => {
        console.log('ws opened')
    }

    ws.onmessage = (message) => {
        console.log('helo', message)
        let msg = JSON.parse(message.data);

        msg.dateTime = new Date();

        d[msg.mac] = msg;

        if (allMeasurements[msg.mac] == undefined) {
            allMeasurements[msg.mac] = []
        }

        allMeasurements[msg.mac] = [...allMeasurements[msg.mac], msg]
    }

    let d: any = {};

    $: data = Object.values(d)

    let keys = ["name", 'temperature', 'humidity', 'pressure', 'soil']

    let selected: any = undefined;

    $: selectedData = allMeasurements[selected]
</script>

<main>
    <div class="inline">
        <h1> XBee Sensor Managament </h1>
        <Button/>
    </div>
    <div class="table">
        <ActionableTable
                label="sensors"
                keys={keys}
                formatFunc={(val, key) => {
                    switch (key){
                        case 'temperature': return val + '°C'
                        case 'humidity': return val + '%'
                        case 'pressure': return val + 'hPa'
                        case 'soil': return val + '%'
                        default: return defaultFormat(val, key)
                    }
                }}
                action={(row) => {selected = row.mac}}
                data={data}/>

    </div>


    {#if selected}

        <h2> All measurements of selected device </h2>

        <div class="table">

            <ActionableTable
                label="measurements"
                formatFunc={(val, key) => {
                    switch (key){
                        case 'temperature': return val + '°C'
                        case 'humidity': return val + '%'
                        case 'pressure': return val + 'hPa'
                        case 'soil': return val + '%'
                        default: return defaultFormat(val, key)
                   }
                }}
                keys={['dateTime', "name", 'temperature', 'humidity', 'pressure', 'soil']}
                data={selectedData}/>
        </div>

    {/if}
</main>

<style>

    .inline {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .table {
        text-align: start;
        justify-content: start;
    }

    h2 {
        text-align: start;
        margin-top: 5ch;
    }
</style>
