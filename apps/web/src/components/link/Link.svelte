<script lang="ts">
  export let link: string | undefined = undefined;
  export let target:
    | "_self"
    | "_blank"
    | "_top"
    | "_parent"
    | undefined
    | null = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if link}
  <a
    href={link}
    {target}
    class="cursor-pointer hover:text-indigo-600 {$$props.class ?? ''}"
    ><slot /></a
  >
{:else}
  <slot />
{/if}
