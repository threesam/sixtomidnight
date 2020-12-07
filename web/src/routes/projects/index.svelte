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