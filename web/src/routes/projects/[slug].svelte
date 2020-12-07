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
      "image": mainImage.asset->url,
      "alt": mainImage.alt,
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
  import Hero from '../../components/Hero.svelte';

</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<Hero data={project}/>

<GoBack>
  back outta here
</GoBack>
<div class="content">
  <BlockContent blocks={project.body} {serializers} />
</div>
