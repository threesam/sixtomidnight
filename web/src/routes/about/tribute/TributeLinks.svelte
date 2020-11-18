<script>
  const links = [
    {
      name: 'facebook',
      href:
        'https://www.facebook.com/pages/Six-to-Midnight-Production-Studios/166143110389253',
      icon: 'fab fa-facebook-square',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/sixtomidnightproductions',
      icon: 'fab fa-instagram-square',
    },
  ]
</script>

<style>
  .wrapper {
    background-color: var(--dark-grey);
    width: max-content;
    padding: 1rem;
    text-align: center;
    border-radius: 1rem;
    color: var(--accent);
    box-shadow: inset 0 0 0.125rem var(--black);
  }
  .links {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
    height: 3rem;
    margin-top: 0.5rem;
  }
  a {
    font-size: 3rem;
    opacity: 0.7;
  }
  a:hover {
    opacity: 0.9;
  }
  h3 {
    text-transform: uppercase;
    margin: 0;
    text-shadow: 0 0.125rem 0.25rem var(--black);
  }
  span {
    font-size: 0.8rem;
  }
  i {
    color: var(--white);
  }
</style>

<div class="wrapper">
  <h3>Social Links</h3>
  <span>(archived)</span>
  <div class="links">
    {#each links as { href, name, icon }}
      <a {href} aria-label={name} target="_blank" rel="noopener noreferrer">
        <i class={icon} />
      </a>
    {/each}
  </div>
</div>
