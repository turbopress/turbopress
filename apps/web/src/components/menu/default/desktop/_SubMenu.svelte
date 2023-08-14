<script lang="ts">
  import type { Link } from "@turbopress/api/types";
  import LinkSvelte from "../../../link/Link.svelte";
  export let subMenu: {
    link: Link;
    id?: string;
  };
</script>

<LinkSvelte
  link={subMenu.link.url}
  class="h-7 hover:text-black hover:bg-slate-100 flex items-center"
>
  <div class="w-full px-3">
    {subMenu.link.label}
  </div>
</LinkSvelte>
