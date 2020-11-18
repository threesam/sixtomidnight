<script>
  export let segment
</script>

<style>
  :global(:root) {
    --nav-height: 3rem;
  }

  nav {
    border-bottom: 1px solid var(--dark-grey);
    font-weight: 300;
    height: var(--nav-height);
    background: var(--black);
    color: var(--white);
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
    width: max-content;
  }
  li {
    display: flex;
    align-items: center;
    height: var(--nav-height);
    margin-left: 1rem;
  }

  a {
    text-decoration: none;
  }
  .selected {
    border-bottom: 1px solid var(--accent);
  }
</style>

<nav>
  <ul>
    <li class={segment === undefined ? 'selected' : ''}>
      <a href=".">home</a>
    </li>
    <li class={segment === 'services' ? 'selected' : ''}>
      <a rel="prefetch" href="services">services</a>
    </li>
    <li class={segment === 'snacks' ? 'selected' : ''}>
      <a rel="prefetch" href="snacks">snacks</a>
    </li>
    <li class={segment === 'about' ? 'selected' : ''}>
      <a rel="prefetch" href="about">about</a>
    </li>
    <li class={segment === 'contact' ? 'selected' : ''}>
      <a rel="prefetch" href="contact">contact</a>
    </li>
  </ul>
  <!-- <a
    id="contact"
    href="mailto:contact@sixtomidnight.productions"
    aria-label="contact email">
    <i class="fas fa-envelope" />
  </a> -->
</nav>
