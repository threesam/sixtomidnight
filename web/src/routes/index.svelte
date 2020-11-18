<script>
  import { fade, blur } from 'svelte/transition'
</script>

<style>
  img {
    top: 0;
    opacity: 0.02;
    filter: invert();
  }
  a {
    opacity: 0.69;
  }
  a:hover {
    opacity: 1;
    color: var(--accent);
  }
</style>

<svelte:head>
  <title>Six to Midnight</title>
</svelte:head>

<div in:blur id="covid">
  <h1>So About Covid...</h1>
  <p>
    Based on state guidelines, we are not currently offering in-person
    recording or content creation. However, web development, streaming
    consultation & services, and audio mixing & mastering are still available,
    with outdoor event production to follow when restrictions are loosened.
    This is an unprecendented, uncertain time for us, our community, and for
    so many others so please be compassionate and stay safe! Also...
    <a href="https://blacklivesmatter.com/">#BLM</a>
  </p>
</div>

<img in:fade src="logoMain.svg" alt="six to midnight logo" />
