<script lang="ts">
    export let changePage: (page: number, absolute?: boolean) => void;

    export let currentPage: number;
    export let rowCount: number;

    export let pageSize: number;

    let maxPages: number = Math.ceil(rowCount / pageSize);

    let buttonCount = 7;

    export function pageChange(page: number, absolute?: boolean ) {
        changePage(page, absolute);

        paginationButtons = genButtons()
    }

    function genButtons() {

        if (currentPage >= maxPages - 3) {
			// high end of pages
            return Array.from({ length: (buttonCount - 2) }, (_, i) => maxPages - ((buttonCount - 1) - i))
        } else {
            return Array.from({ length: (buttonCount - 2) }, (_, index) => {
                return (currentPage + index - Math.floor((buttonCount - 2) / 2) - 1 + 1) + Math.max(0, Math.floor((buttonCount - 2) / 2) - currentPage + 1)

            }).filter(Boolean) as number[]
        };
    }

    let paginationButtons = genButtons();
</script>


<div class="paginationControlls">
    <button
        on:click={() => pageChange(-1)}>
            previous page
    </button>

    <div class="absolutePages">
        <button
            class:selected={0 == currentPage}
            on:click={() => pageChange(0, true)} > 1 </button>

        {#if currentPage > 5 }
            <span>...</span>
        {/if}

        {#each paginationButtons as i}
            {#if i > 0}
            <button
            class:selected={currentPage == i}
                on:click={() => pageChange(i, true)} >
                    {i + 1}
            </button>

            {/if}

        {/each}

        {#if currentPage + 4 < (Math.floor(rowCount / pageSize))}
            <span>...</span>
        {/if}
        <button
            class:selected={maxPages - 1 == currentPage}
            on:click={() => pageChange(maxPages -1, true)} > {maxPages} </button>
    </div>

    <button on:click={() => pageChange(1)}> next page </button>
</div>

<style lang="scss">
    .paginationControlls {
			display: flex;
			justify-content: space-between;

			.absolutePages {
				display: flex;
				gap: 2ch;

				button {


					&.selected { cursor: default; }

					&.selected, &:hover {
						position: relative;
						font-weight: bold;
						--clr: rgba(255,255,255,1);

						&:not(&.selected):hover { --clr: rgba(255,255,255,0.5); }

						&::after {
							content: "";
							position: absolute;

							bottom: 0px;
							left: 0;


							height: 2px;
							width: 100%;

							background-color: var(--clr);
						}
					}
				}
			}

			button {
				position: relative;

				background-color: transparent;
				border: none;
				cursor: pointer;

			}

			& > button {

				&:first-of-type:after { right: 0; }
				&:last-of-type:after  { left: 0;  }

				&:after {
					content: "";

					position: absolute;
					bottom: 0;

					width: 0%;
					height: 2px;
					background-color: white;

					transition: 0.2s;
				}
				&:hover:after { width: 100%; }

			}
		}
</style>