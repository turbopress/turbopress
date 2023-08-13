<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { MainMenu } from "@turbopress/api/types";
  import MainMenuSvelte from "./_MainMenu.svelte";
  import { isMenuOpen } from "./defaultMenu";

  export let menus: MainMenu[];

  function handleClick() {
    isMenuOpen.set(!$isMenuOpen);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="flex items-center cursor-pointer font-semibold hover:text-indigo-600"
  on:click={handleClick}
  on:keypress={handleClick}
>
  {#if $isMenuOpen}
    <Icon icon={"ic:round-close"} class="h-5 w-5 mr-2" />
  {:else}
    <Icon icon={"ic:baseline-menu"} class="h-5 w-5 mr-2" />
  {/if}
  <div>Menu</div>
</div>

{#if $isMenuOpen}
  <div class="w-full">
    {#each menus as menu}
      <MainMenuSvelte {menu} />
    {/each}
  </div>
{/if}
