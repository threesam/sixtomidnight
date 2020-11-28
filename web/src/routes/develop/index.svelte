<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[_type == "developmentService"]{
          ...,
          "image": mainImage.asset->url,
          "alt": mainImage.alt
        }`,
      )
      .then((developmentServices) => {
        return { developmentServices }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let developmentServices
</script>

<style>
  li {
    position: relative;
    width: 100%;
    height: 30vh;
  }

  a {
    font-size: 1.5rem;
    display: grid;
    place-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    filter: grayscale(90%);
    text-shadow: 0 0 25px black;
    font-size: 2rem;
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

<h1>Development Services</h1>

{#if !developmentServices.length}
  <p>seems like we don't have any</p>
{:else}
  <ul>
    {#each developmentServices as developmentService}
      <li>
        <a href={`develop/${developmentService.slug.current}`}>
          {developmentService.name}
          <img src="{developmentService.image}" alt="{developmentService.alt}">
        </a>
      </li>
    {/each}
  </ul>
{/if}