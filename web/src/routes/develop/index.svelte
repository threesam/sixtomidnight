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

<h1>Services</h1>

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