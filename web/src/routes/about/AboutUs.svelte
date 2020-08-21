<script>
  import { fly } from 'svelte/transition'

  import Header from './Header.svelte'
</script>

<style>
  article {
    height: calc(100vh - var(--nav-height));
  }
  div {
    display: grid;
    place-content: center;
    max-width: 56rem;
    margin: 0 auto;
    padding: 2rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 100;
  }
</style>

<article>

  <Header title="About Us" src="pedals.jpg" alt="guitar pedals" />

  <div in:fly={{ y: -100 }}>
    <p>
      Six to Midnight Productions is a tech-progressive arts collective based
      out of Trenton, NJ. We bring people together, online and face-to-face, to
      build communities, create online content, and host events.
    </p>
  </div>

</article>
