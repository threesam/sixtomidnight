<script>
  import AboutUs from './AboutUs.svelte'
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

<section>
  <AboutUs />
</section>
<a href="/about/tribute">tribute</a>
<a href="/about/team">team</a>
