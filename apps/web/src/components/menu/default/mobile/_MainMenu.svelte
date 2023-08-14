<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { MainMenu } from "@turbopress/api/types";
  import Link from "../../../link/Link.svelte";
  import { mobileMenuState } from "../defaultMenu";
  import SubMenu from "./_SubMenu.svelte";

  export let menu: MainMenu;
  export let index: number;

  $: isOpen = $mobileMenuState.activeIndex == index;

  function handleClick() {
    if (isOpen) mobileMenuState.setKey("activeIndex", undefined);
    else mobileMenuState.setKey("activeIndex", index);
  }
</script>

<div class="flex items-center h-7">
  <Link link={menu.url} class="hover:text-black w-full hover:bg-slate-100 p-1 ">
    <div class="w-full">{menu.label}</div>
  </Link>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="hover:bg-slate-100 h-8 w-10 {isOpen ? 'bg-indigo-50' : ''}"
    on:click={handleClick}
    on:keydown={handleClick}
  >
    <Icon
      icon="ic:sharp-keyboard-arrow-down"
      class="text-2xl mx-auto mt-1  transition-transform  duration-200 {isOpen
        ? 'rotate-180 text-indigo-800 '
        : ''}"
    ></Icon>
  </div>
</div>

{#if isOpen}
  {#if menu.subMenu}
    {#each menu.subMenu as subMenu}
      <SubMenu {subMenu} />
    {/each}
  {/if}
{/if}
