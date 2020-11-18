<script>
  import AboutUs from './AboutUs.svelte'

  let scrollY
</script>

<style>
  section {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<svelte:window bind:scrollY />

<section>
  <AboutUs />
</section>
