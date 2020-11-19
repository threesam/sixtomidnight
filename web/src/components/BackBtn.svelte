<script>
  const goBack = () => {
    history.go(-1)
  }
</script>

<button on:click={goBack}>
  <slot />
</button>