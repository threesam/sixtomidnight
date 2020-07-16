<script>
  import { fly, blur } from 'svelte/transition'

  export let index
  export let teamMember
  const { name, image, alt, caption } = teamMember
</script>

<style>
  div {
    width: 300px;
    background: rgba(var(--rgb-black), 0.8);
    border-radius: 1rem;
    position: relative;
  }
  h2,
  figcaption {
    margin: 0;
  }
  h2 {
    padding: 1rem;
  }
  figcaption {
    padding-bottom: 0.5rem;
  }
</style>

<div transition:fly={{ x: -200, delay: index * 100 }}>
  <h2>{name}</h2>
  <figure>
    <img src={`${image}?fit=crop&crop=entropy&w=300&h=300`} {alt} />
    <figcaption>{caption}</figcaption>
  </figure>
</div>
