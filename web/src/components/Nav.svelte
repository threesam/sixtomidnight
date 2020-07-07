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
  }

  ul {
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
    max-width: 400px;
    justify-content: space-evenly;
  }

  a {
    text-decoration: none;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'tricks' ? 'selected' : ''}
        href="tricks">
        tricks
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        class={segment === 'tribute' ? 'selected' : ''}
        href="tribute">
        tribute
      </a>
    </li>
  </ul>
</nav>
