<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        '*[_type == "project"]',
      )
      .then((projects) => {
        return { projects }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let projects
</script>

<h1>Projects</h1>

{#if !projects.length}
  <p>seems like we don't have any</p>
{:else}
  <ul>
    {#each projects as project}
      <li><a href={`projects/${project.slug.current}`}>{project.title}</a></li>
    {/each}
  </ul>
{/if}