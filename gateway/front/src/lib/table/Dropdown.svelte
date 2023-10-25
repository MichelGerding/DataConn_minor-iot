<script lang="ts">
    export let label: string;
    export let changePageSize: (e: any) => void

    export let pageSizes: number[];

    export let pageSize = pageSizes[0];
</script>


<div>
    {label}
    <select on:change={changePageSize}>
        {#each pageSizes as s}
            <option value={s} selected={s == pageSize}>{s}</option>
        {/each}
    </select>
</div>
