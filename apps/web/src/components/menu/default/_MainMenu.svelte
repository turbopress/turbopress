<script lang="ts">
  import type { MainMenu } from "@turbopress/api/types";
  import Link from "../../Link/Link.svelte";
  import SubMenu from "./_SubMenu.svelte";

  export let menu: MainMenu;
</script>

<Link link={menu.url}>
  {menu.label}
</Link>
{#if menu.subMenu}
  {#each menu.subMenu as subMenu}
    <SubMenu {subMenu} />
  {/each}
{/if}
