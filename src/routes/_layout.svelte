<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
</script>

<style>
  .spacer {
    height: 1vh;
  }
</style>

<Nav {segment} />
<div class="spacer" />

<main>
  <slot />
</main>
