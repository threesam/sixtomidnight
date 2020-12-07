<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
          title,
          "slug": slug.current,
          "image": mainImage.asset->url,
          "alt": mainImage.alt
        }`,
      )
      .then((posts) => {
        return { posts }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let posts
  console.log(posts)

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<svelte:head>
  <title>Snacks</title>
</svelte:head>

<h1>Recent Posts</h1>

{#if !posts.length}
  <p>seems like we don't have any</p>
{:else}
  <ul>
    {#each posts as {title, slug, image: src, alt}}
      <li>
        <a href={`snacks/${slug}`}>{title}</a>
        <img {src} {alt}>
      </li>
    {/each}
  </ul>
{/if}
