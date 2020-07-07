<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  main {
    /* position: relative; */
    /* background-color: var(--white); */
    margin: 0 auto;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
