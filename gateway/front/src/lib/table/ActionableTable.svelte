<script lang="ts">
    import {
        defaultFormat,
        type SortFunc,
        type formatFunc,
        defaultSort,
        SortDirection,
        type SortState
    } from './tableFunctions';

    import PaginationButtons from './PaginationButtons.svelte';
    import Dropdown from './Dropdown.svelte';

    // inputs
    export let data: Promise<any[]>;
    export let keys: string[];

    export let action: any = undefined;

    export let label: string;

    //	pagination
    export let pageSizes: number[] = [5, 10, 20, 50, 100];
    export let pageSize: number = pageSizes[0];

    $: maxPages = (async () => Math.ceil((await data).length / pageSize))();

    export let formatFunc: formatFunc = defaultFormat;
    export let sortFunc: SortFunc = defaultSort;

    // outputs
    export let currentPage = 0;

    let sortState: SortState = {
        column: keys.includes('dateTime') ? 'dateTime' : keys[0],
        direction: SortDirection.DESC
    };

    $: rows = (async () => {
        return sortFunc(
            sortState,
            (await data).map((d, i) => {
                return {
                    hashId: i,
                    ...d
                };
            })
        );
    })();

    function sort(column: string) {
        if (sortState.column == column) {
            sortState.direction = +!sortState.direction;
        } else {
            sortState = {
                column: column,
                direction: SortDirection.ASC
            };
        }
    }

    async function changePage(page: number, absolute: boolean = false) {
        // check if that page is valid
        if ((absolute && page < 0) || (!absolute && currentPage + page < 0)) {
            return;
        }

        if (absolute && Math.ceil((await rows).length / pageSize) <= page) {
            return;
        } else if (!absolute && Math.ceil((await rows).length / pageSize) <= currentPage + page) {
            return;
        }

        if (absolute) {
            currentPage = page;
        } else {
            currentPage += page;
        }
    }

    let paginationButtons: any;

    function changePageSize(e: any) {
        pageSize = parseInt(e.target.value);
        currentPage = 0;

        if (paginationButtons) paginationButtons.pageChange(0, true);
    }
</script>

<div class="wrapper">
    <Dropdown label={"shown " + label} {changePageSize} {pageSizes} bind:pageSize/>

    <div class="tbl">
        <table>
            <thead>
            <tr>
                {#each keys as k}
                    <th on:click={() => sort(k)}>
                        <div class="tableHeaderContent">
                            {formatFunc(k)}
                            <span class="emptyIcon"/>
                        </div>
                    </th>
                {/each}
                {#if action !== undefined}
                    <th></th>
                {/if}
            </tr>
            </thead>

            <tbody>
            {#await rows }
                {#each {length: pageSize} as _, i}
                    <tr class="placeHolder">
                        {#each keys as _}
                            <td>
                                <wbr/>
                            </td>
                        {/each}
                    </tr>
                {/each}
                {#if action !== undefined}
                    <td>
                        <wbr/>
                    </td>
                {/if}
            {:then rows}
                {#each {length: pageSize} as _, i}
                    {#if rows[pageSize * currentPage + i]}
                        <tr>
                            {#each keys as key}
                                <td> {@html formatFunc(rows[pageSize * currentPage + i][key], key)} </td>
                            {/each}
                            {#if action !== undefined}

                                <td>
                                    <button on:click={() => {action(rows[pageSize * currentPage + i])}}> show all
                                        measurements
                                    </button>
                                </td>
                            {/if}
                        </tr>
                    {/if}
                {/each}
            {/await}
            </tbody>
        </table>
    </div>

    {#await rows}
        <div class="placeholderPagination">
            <button> previous page</button>
            <button> next page</button>
        </div>
    {:then rows}
        {#await maxPages then maxPages}
            {#if maxPages > 1}
                <PaginationButtons
                        rowCount={rows.length}
                        bind:this={paginationButtons}
                        bind:pageSize
                        bind:currentPage
                        {changePage}
                />
            {/if}
        {/await}
    {/await}
</div>

<style lang="scss">
  .placeholderPagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 13px;

    button {
      position: relative;

      background-color: white;
      border: none;
      cursor: pointer;
    }
  }

  .placeHolder {
    &:nth-child(2n) {
      background-color: rgba(0, 0, 0, 0.02);
    }

    & > td {
      position: relative;

      padding: 0.75em 0px;
      --padr: 4ch;


      &:last-of-type {
        width: 121px;
      }


      &:not(:last-of-type) {
        padding-right: 4ch;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: var(--padr);
          top: calc(50% - 2px);
          height: 3px;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .wrapper {
    .tbl {
      margin-bottom: 0.5em;
      overflow-y: auto;

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
        background-color: white;
      }

      &::-webkit-scrollbar {
        height: 3px;
        background-color: #f5f5f5;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: #000000;
      }

      table {
        width: max-content;
        min-width: 100%;

        border-collapse: collapse;

        thead {
          tr {
            border-bottom: 1px solid rgba(0, 0, 0, 0.8);

            th {
              padding: 10px 0;

              text-align: start;
              text-transform: capitalize;

              .tableHeaderContent {
                display: flex;
                align-items: center;
                height: 1.5em;

                width: 100%;

                .emptyIcon {
                  width: 24px;
                }
              }
            }
          }
        }

        tbody {
          tr {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);

            td {
              padding: 0.75em 0px;

              &:not(:last-of-type) {
                padding-right: 1ch;

                &:not(:first-of-type) {
                  padding-right: 4ch;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
