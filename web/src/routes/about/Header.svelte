<script>
  import { fade, blur } from 'svelte/transition'

  export let title
  export let src
  export let alt
</script>

<style>
  div {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.69);
    box-shadow: 0 1rem 0.5rem rgba(0, 0, 0, 0.39);
  }
  img {
    position: absolute;
    max-height: 100%;
    z-index: -10;
  }
  h1 {
    position: absolute;
    font-size: 4rem;
    max-width: 70rem;
    margin: 0 auto;
    top: calc(50% - 2rem);
    z-index: 10;
  }
</style>

<div>
  <img in:fade {src} {alt} />
  <h1 in:blur>{title}</h1>
</div>
