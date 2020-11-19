<script context="module">
  import client from "../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "developmentService" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[] {
        ...,
        children[]{
          ...
        }
      },
      "projects": *[_type == 'project']{
        title,
        "slug": slug.current
      }
    }`;

    const query = filter + projection;
    const developmentService = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return { developmentService };
  }
</script>

<script>
  export let developmentService;
  const {projects} = developmentService

  import GoBack from '../../components/BackBtn.svelte'

</script>

<svelte:head>
  <title>{developmentService.name}</title>
</svelte:head>

<GoBack>
  back outta here
</GoBack>

<h1>{developmentService.name}</h1>

<div class="content">
  <BlockContent blocks={developmentService.body} {serializers} />
</div>

<h2>Associated Projects</h2>
<ul>
  {#each projects as project}
     <li><a href={`projects/${project.slug}`}>{project.title}</a></li>
  {/each}
</ul>
