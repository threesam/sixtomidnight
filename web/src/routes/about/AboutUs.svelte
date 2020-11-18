<script>
  import { fly } from 'svelte/transition'

  import Header from './Header.svelte'
</script>

<article>
  <h1>About Us</h1>
  <div in:fly={{ y: -100 }}>
    <p>
      Six to Midnight Productions is a tech-progressive arts collective based
      out of Trenton, NJ. We bring people together, online and face-to-face, to
      build communities, create online content, and host events.
    </p>
  </div>
</article>
