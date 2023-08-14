<script lang="ts">
  import type { MainMenu } from "@turbopress/api/types";
  import Link from "../../../link/Link.svelte";

  export let menu: MainMenu;

  const subMenus = menu.subMenu ?? [];
</script>

<div class="group relative inline-block text-left group">
  <div id="menu-button" aria-expanded="false" aria-haspopup="true">
    <Link
      link={menu.url}
      class="hover:text-black w-full group-hover:bg-slate-100 p-2 "
    >
      {menu.label}
    </Link>
  </div>

  <div
    class="mt-2 absolute right-0 z-10 w-56 origin-top-right rounded-sm bg-white ring-1 ring-slate-200 focus:outline-none hidden group-hover:block"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="" role="none">
      {#each subMenus as subMenu}
        <Link link={subMenu.link.url}>
          <div
            class="px-3 py-1.5 block hover:bg-slate-100 ring-1 ring-inset ring-gray-200 ring-opacity-30"
          >
            {subMenu.link.label}
          </div>
        </Link>
      {/each}
    </div>
  </div>
</div>
