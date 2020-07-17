<script>
  import { fly, blur } from 'svelte/transition'

  export let index
  export let teamMember
  const { name, image, alt, caption } = teamMember
</script>

<style>
  div {
    width: 300px;
    background: rgba(var(--rgb-black), 1);
    border-radius: 1rem;
    position: relative;
    color: var(--light-grey);
    border: 0.125rem solid var(--dark-grey);
    overflow: hidden;
  }
  h2,
  figcaption {
    margin: 0;
  }
  h2 {
    padding: 1rem;
    font-weight: 900;
  }
  figcaption {
    padding: 0 0.5rem;
    padding-bottom: 0.5rem;
  }
  img {
    filter: brightness(0.75) grayscale(25%);
  }
</style>

<div transition:fly={{ x: -200, delay: index * 100 }}>
  <h2>{name}</h2>
  <figure>
    <img src={`${image}?fit=crop&crop=entropy&w=300&h=300`} {alt} />
    <figcaption>{caption}</figcaption>
  </figure>
</div>
