<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("media.json");
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
  .gallery {
    display: grid;
    /* grid-template-rows: repeat(auto, 1fr); */
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery img {
    max-width: 100%;
  }

  .gallery figure {
    display: inline;
    margin: 0 0;
  }

  .gallery .card {
    margin: 2em;
  }

  @media (max-width: 1000px) {
    .gallery {
      display: flex;
      flex-direction: column;
    }
  }

  a {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>archive</title>
</svelte:head>

<div class="gallery">
  {#each photos as { caption, taken_at, path: src }}
    <div class="card" id={getId(src)}>
      <figure>
        <img {src} alt={caption} />
        <figcaption>
          <a href="archive/#{getId(src)}">{caption || '.'}</a>
        </figcaption>
      </figure>
    </div>
  {/each}
</div>
