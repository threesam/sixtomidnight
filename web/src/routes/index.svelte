<script>
  import { fade } from 'svelte/transition'
</script>

<style>
  section {
    padding: 1rem;
    max-width: 40rem;
    margin: 0 auto;
  }
  div {
    display: flex;
    flex-flow: column;
    align-items: center;
    position: fixed;
    z-index: -10;
    height: calc(100vh - var(--nav-height));
    width: 100%;
  }
  img {
    position: fixed;
    width: 50%;
    max-width: 20rem;
    height: 100%;
    top: 0;
    opacity: 0.5;
    z-index: -10;
    filter: invert();
  }
  h1,
  p {
    text-align: center;
  }

  h1 {
    margin-top: 1rem;
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

<section>
  <h1>So About Covid</h1>
  <p>
    Based on state guidelines, we are not offering in-person recording or
    content creation. Web design/development, streaming consultation/services,
    and audio mixing/mastering are still available, with outdoor event
    production to follow.
  </p>
  <p>
    Stay safe! and also
    <a href="https://blacklivesmatter.com/">#BLM</a>
  </p>
</section>

<div class="logo">
  <img in:fade src="logoMain.svg" alt="logo" />
</div>
