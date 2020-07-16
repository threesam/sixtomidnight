<script context="module">
  import client from '../../sanityClient'
  export async function preload({ params, query }) {
    const team = await client.fetch(
      '*[_type == "author"]{name, "image": image.asset->url, "alt": image.alt, "caption": image.caption, "slug": slug.current}',
    )
    return { team }
  }
</script>

<script>
  import AboutUs from './AboutUs.svelte'
  import Team from './Team.svelte'
  export let team

  let scrollY
</script>

<style>
  section {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<svelte:window bind:scrollY />

<section>
  <AboutUs />
  <Team {team} {scrollY} />
</section>
