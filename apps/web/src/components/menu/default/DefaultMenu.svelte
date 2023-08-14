<script lang="ts">
  import type { MainMenu } from "@turbopress/api/types";
  import { useMediaQuery } from "svelte-breakpoints";
  import DefaultDesktopMenu from "./desktop/DefaultDesktopMenu.svelte";
  import DefaultMobileMenu from "./mobile/DefaultMobileMenu.svelte";

  export let menus: MainMenu[];

  const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>

{#if !$isDesktop}
  <DefaultMobileMenu {menus}></DefaultMobileMenu>
{/if}

{#if $isDesktop}
  <DefaultDesktopMenu {menus}></DefaultDesktopMenu>
{/if}
