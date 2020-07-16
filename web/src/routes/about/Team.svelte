<script>
  import { blur } from 'svelte/transition'
  import { onMount } from 'svelte'

  import TeamMember from './TeamMember.svelte'
  export let team
  export let scrollY

  let container
  let top

  onMount(() => {
    let cTop = container.getBoundingClientRect()
    top = cTop.top
  })
</script>

<style>
  article {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    background: var(--dark-grey);
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
    color: var(--black);
    margin: 1rem;
  }
</style>

<article bind:this={container}>
  {#if scrollY > top - 75}
    <h2 transition:blur={{ delay: 200 }}>Our Team</h2>
    <div>
      {#each team as teamMember, index}
        <TeamMember {teamMember} {index} />
      {/each}
    </div>
  {/if}
</article>
