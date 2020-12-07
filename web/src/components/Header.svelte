<script>
  export let segment
</script>

<style>
  .selected {
    border-bottom: 1px solid var(--primary);
  }
</style>

<header>
  <a href="." class={segment === undefined ? 'selected' : ''}>Six to Midnight</a>
  <nav>
    <a rel="prefetch" href="develop" class={segment === 'develop' ? 'selected' : ''}>develop</a>
    <a rel="prefetch" href="snacks" class={segment === 'snacks' ? 'selected' : ''}>snacks</a>
    <a rel="prefetch" href="about" class={segment === 'about' ? 'selected' : ''}>about</a>
    <a rel="prefetch" href="contact" class={segment === 'contact' ? 'selected' : ''}>contact</a>
  </nav>
</header>
  <!-- <a
    id="contact"
    href="mailto:contact@sixtomidnight.productions"
    aria-label="contact email">
    <i class="fas fa-envelope" />
  </a> -->
