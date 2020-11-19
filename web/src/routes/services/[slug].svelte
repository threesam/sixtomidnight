<script context="module">
  import client from "../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "service" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[] {
        ...,
        children[]{
          ...
        }
      }
    }`;

    const query = filter + projection;
    const service = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return { service };
  }
</script>

<script>
  export let service;
</script>

<svelte:head>
  <title>{service.name}</title>
</svelte:head>

<h1>{service.name}</h1>

<div class="content">
  <BlockContent blocks={service.body} {serializers} />
</div>
