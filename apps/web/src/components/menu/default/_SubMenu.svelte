<script lang="ts">
  import type { Link } from "@turbopress/api/types";
  import LinkSvelte from "../../Link/Link.svelte";
  export let subMenu: {
    link: Link;
    id?: string;
  };
</script>

<div>
  <LinkSvelte link={subMenu.link.url}>
    {subMenu.link.label}
  </LinkSvelte>
</div>
