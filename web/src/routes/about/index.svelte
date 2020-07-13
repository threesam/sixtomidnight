<script context="module">
  import client from '../../sanityClient'
  export async function preload({ params, query }) {
    const team = await client.fetch(
      '*[_type == "author"]{name, "image": image.asset->url, "alt": image.alt, "caption": image.caption, "slug": slug.current}',
    )
    console.log(team)
    return { team }
  }
</script>

<script>
  import TeamMember from '../../components/TeamMember.svelte'
  export let team
</script>

<style>
  section {
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<section>
  <h1>Team</h1>

  <div>
    {#each team as teamMember}
      <TeamMember {teamMember} />
    {/each}
  </div>
</section>
