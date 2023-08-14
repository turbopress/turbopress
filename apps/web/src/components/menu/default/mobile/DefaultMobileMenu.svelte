<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { MainMenu } from "@turbopress/api/types";
  import { mobileMenuState } from "../defaultMenu";
  import MainMenuSvelte from "./_MainMenu.svelte";

  export let menus: MainMenu[];

  function handleClick() {
    mobileMenuState.setKey("isOpen", !isOpen);
  }

  $: isOpen = $mobileMenuState.isOpen;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="flex items-center cursor-pointer font-semibold hover:text-indigo-600"
  on:click={handleClick}
  on:keypress={handleClick}
>
  {#if isOpen}
    <Icon icon="ic:round-close" class="h-5 w-5 mr-2" />
  {:else}
    <Icon icon="ic:baseline-menu" class="h-5 w-5 mr-2" />
  {/if}
  <div>Menu</div>
</div>

{#if isOpen}
  <div class="w-full cursor-pointer lg:hidden">
    {#each menus as menu, i}
      <MainMenuSvelte {menu} index={i} />
    {/each}
  </div>
{/if}
