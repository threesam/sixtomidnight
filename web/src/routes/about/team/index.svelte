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
