<script lang="ts">
  import type { Page } from "@turbopress/api/types";
  import RichText from "../../rich-text/RichText.svelte";

  export let page: Page;
</script>

{#if page.content}
  <section class="">
    <header>
      <h2>{page.title}</h2>
    </header>
    <article>
      <RichText richText={page.content}></RichText>
    </article>
    <hr />
  </section>
{/if}
