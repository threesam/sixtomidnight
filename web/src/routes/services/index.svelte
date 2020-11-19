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
      <li><a href={`services/${service.slug.current}`}>{service.name}</a></li>
    {/each}
  </ul>
{/if}