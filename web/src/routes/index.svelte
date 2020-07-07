<script>
  import { fade } from 'svelte/transition'

  let clip = 'website.mp4'
</script>

<style>
  div {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
  img {
    position: fixed;
    width: 50%;
    max-width: 25rem;
    height: 100%;
    top: 0;
    opacity: 0.5;
    z-index: -10;
    filter: invert();
  }
</style>

<svelte:head>
  <title>Six to Midnight</title>
</svelte:head>

<div>
  <img in:fade src="logoMain.svg" alt="logo" />
</div>
