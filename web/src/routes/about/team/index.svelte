<script context="module">
  import client from '../../../sanityClient'
  export async function preload({ params, query }) {
    const team = await client.fetch(
      '*[_type == "author"]{name, "image": image.asset->url, "alt": image.alt, "caption": image.caption, "slug": slug.current}',
    )
    return { team }
  }
</script>

<script>
  import { blur } from 'svelte/transition'

  import TeamMember from './TeamMember.svelte'
  export let team

  import GoBack from '../../../components/BackBtn.svelte'

</script>

<style>
  article {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    padding-bottom: 2rem;
  }
  div {
    text-align: center;
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-gap: 2rem;
    width: max-content;
  }
  @media (max-width: 649px) {
    div {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 650px) {
    div {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1000px) {
    div {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  h2 {
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--accent);
    margin: 1rem;
  }
</style>

<GoBack>
  back outta here
</GoBack>

<article>
    <h2 transition:blur={{ delay: 200 }}>Our Team</h2>
    <div>
      {#each team as teamMember, index}
        <TeamMember {teamMember} {index} />
      {/each}
    </div>
</article>
