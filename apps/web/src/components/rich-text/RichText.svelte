<script lang="ts">
  import type { FormattedElement, FormattedText } from "@turbopress/api/types";
  import { Text } from "slate";

  export let richText: (FormattedElement | FormattedText | any)[];
</script>

{#each richText as node}
  {#if Text.isText(node)}
    {#if node.bold}
      <strong>{node.text}</strong>
    {/if}
    {#if node.code}
      <strong>{node.text}</strong>
    {/if}
    {#if node.italic}
      <strong>{node.text}</strong>
    {/if}
    {#if !node.bold && !node.code && !node.italic}
      {node.text}
    {/if}
  {:else}
    {#if node.type === "h1"}
      <h1><svelte:self richText={node.children}></svelte:self></h1>
    {/if}
    {#if node.type === "h2"}
      <h2><svelte:self richText={node.children}></svelte:self></h2>
    {/if}
    {#if node.type === "h3"}
      <h3><svelte:self richText={node.children}></svelte:self></h3>
    {/if}
    {#if node.type === "h4"}
      <h4><svelte:self richText={node.children}></svelte:self></h4>
    {/if}
    {#if node.type === "h5"}
      <h5><svelte:self richText={node.children}></svelte:self></h5>
    {/if}
    {#if node.type === "h6"}
      <h6><svelte:self richText={node.children}></svelte:self></h6>
    {/if}
    {#if !node.type}
      <p><svelte:self richText={node.children}></svelte:self></p>
    {/if}
  {/if}
{/each}
