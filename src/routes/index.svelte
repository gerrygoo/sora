<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("blue.json");
    const media = await res.json();
    return { media };
  }
</script>

<script>
  export let media;
  $: photos = media.photos;

  const getId = path => {
    const segments = path.split("/");
    return segments[segments.length - 1].split(".")[0];
  };
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<svelte:head>
  <title>fuchi</title>
</svelte:head>

{#each photos as src}
  <div class="card" id={getId(src)}>
    <figure>
      <figcaption>
        <a href="/#{getId(src)}">...</a>
      </figcaption>
      <img {src} alt="a blue sky" />
    </figure>
  </div>
{/each}
