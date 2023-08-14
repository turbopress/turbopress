<script lang="ts">
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
  class="flex items-center cursor-pointer text-sm"
  on:click={handleClick}
  on:keypress={handleClick}
>
  {#each menus as menu, i}
    <MainMenuSvelte {menu} />
  {/each}
</div>

<!-- {#if isOpen}
  <div class="w-full cursor-pointer lg:hidden">
    {#each menus as menu, i}
      <MainMenuSvelte {menu} index={i} />
    {/each}
  </div>
{/if} -->
