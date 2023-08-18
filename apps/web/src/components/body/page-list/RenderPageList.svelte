<script lang="ts">
  import type { Page, PageList } from "@turbopress/api/types";
  import { inview } from "svelte-inview";
  import { writable, type Writable } from "svelte/store";
  import { getPageCollection } from "../../../services/api";
  import type { PayloadCollection } from "../../../types";
  import PageListItem from "./PageListItem.svelte";

  export let block: PageList;

  const query = {
    where: {
      or: [
        {
          categories: {
            in: block.filterByCategories?.map((f) => f.value),
          },
        },
        {
          tags: {
            in: block.filterByTags?.map((f) => f.value),
          },
        },
      ],
    },
    limit: block.numberOfItems ?? 5,
    page: 1,
    sort: block.sortBy,
  };

  const queryState = writable(query);
  const collection: Writable<PayloadCollection<Page> | undefined> = writable();

  async function getPages() {
    const pages = await getPageCollection($queryState);
    collection.set(pages);
  }

  queryState.subscribe((s) => {
    getPages();
  });

  $: pages = $collection?.docs;

  function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
    isInView = detail.inView;
    if (detail.inView && $collection?.hasNextPage) {
      queryState.set({ ...$queryState, limit: $queryState.limit + 1 });
    }
  }

  let isInView: boolean;
</script>

<div
  class="w-full prose prose-headings:m-0 prose-headings:my-3 prose-p:m-0 prose-p:my-2"
>
  {#if pages}
    {#each pages as page}
      <PageListItem {page}></PageListItem>
    {/each}
  {/if}

  <div use:inview on:inview_change={handleChange}></div>
</div>
