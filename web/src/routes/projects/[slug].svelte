<script context="module">
  import client from "../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "project" && slug.current == $slug][0]';
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
    const project = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return { project };
  }
</script>

<script>
  export let project;
  import GoBack from '../../components/BackBtn.svelte'

</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<GoBack>
  back outta here
</GoBack>

<h1>{project.title}</h1>

<div class="content">
  <BlockContent blocks={project.body} {serializers} />
</div>
