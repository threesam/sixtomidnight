<script context="module">
  import client from '../sanityClient'
  export async function preload({ params, query }) {
    const meta = await client.fetch(
      '*[_type == "siteSettings"]{description, keywords, title}',
    )
    return { meta }
  }
</script>

<script>
  import Nav from '../components/Nav.svelte'

  export let segment
  export let meta
  const { title, description, keywords } = meta
  const site = 'https://sixtomidnight.productions'
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    padding: 1rem;
    height: max-content;
    max-width: 56rem;
  }
</style>

<svelte:head>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={`${site}/metaLogo.jpeg`} />
  <meta property="og:url" content={site} />
  <meta property="og:site_name" content={`${title} Productions`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:alt" content={`logo for ${title}`} />
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
