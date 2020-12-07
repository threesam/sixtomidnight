<script>
  export let data
  const {title, image, alt} = data
</script>


<style>
  section {
    width: 100%;
    height: calc(100vh - var(--nav-height));
    position: relative;
    display: grid;
    place-content: center;
    overflow: hidden;
  }

  div {
    max-width: 300px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
    filter: brightness(25%);
    scale: 1.4;
  }
</style>


<section>
  <div>
    <h1>{title}</h1>
    <slot />
  </div>
  <img src={image} {alt}>
</section>