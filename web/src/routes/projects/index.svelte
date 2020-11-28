<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[_type == "project"]{
          title,
          "slug": slug.current,
          "image": mainImage.asset->url,
          "alt": mainImage.alt
        }`,
      )
      .then((projects) => {
        return { projects }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let projects
</script>

<style>
  li {
    position: relative;
    width: 100%;
    height: 30%;
  }

  a {
    font-size: 1.5rem;
    display: block;
    text-decoration: none;
    padding: 2rem;
    width: 100%;
    filter: grayscale(90%);
  }
  a:hover {
    filter: grayscale(30%);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
  }
</style>

<h1>Projects</h1>

{#if !projects.length}
  <p>seems like we don't have any</p>
{:else}
  <ul>
    {#each projects as {title, slug, image: src, alt}}
      <li>
        <a href={`projects/${slug}`}>{title}</a>
        <img {src} {alt}>
      </li>
    {/each}
  </ul>
{/if}