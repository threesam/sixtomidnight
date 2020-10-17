<script>
  import { fade, blur } from 'svelte/transition'
import Contact from './_contact.svelte';
</script>

<style>
  section {
    padding: 2rem;
    /* margin: 0 auto; */
    display: grid;
    place-content: center;
  }
  #covid {
    max-width: 40rem;
  }
  p {
    font-size: 1.2rem;
  }
  .logo {
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
    width: 50rem;
    max-width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.02;
    z-index: -10;
    filter: invert();
  }
  h1 {
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
</section>

<Contact />

<div class="logo">
  <img in:fade src="logoMain.svg" alt="six to midnight logo" />
</div>
