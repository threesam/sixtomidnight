<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        '*[_type == "service"]',
      )
      .then((services) => {
        return { services }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let services
</script>

<h1>Services</h1>

{#if !services.length}
  <p>seems like we don't have any</p>
{:else}
<ul>

  {#each services as service}
  <!-- content here -->
  <li>{service.name}</li>
  {/each}
</ul>
{/if}