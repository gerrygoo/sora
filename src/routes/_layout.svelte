<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
  .spacer {
    height: 1vh;
  }
</style>

<Nav />
<div class="spacer" />

<main>
  <slot />
</main>
