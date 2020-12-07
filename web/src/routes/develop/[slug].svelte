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
      "image": mainImage.asset->url,
      "alt": mainImage.alt,
      "title": name,
      body[] {
        ...,
        children[]{
          ...
        }
      },
      "projects": *[_type == 'project' && references(^._id)]{
        title,
        "image": mainImage.asset->url,
        "alt": mainImage.alt,
        "slug": slug.current
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
  import {scale} from 'svelte/transition'
  export let service;
  const {name, image, alt, description, projects} = service

  import GoBack from '../../components/BackBtn.svelte'
  import Hero from '../../components/Hero.svelte'
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

  
  <Hero data={service}>
    <BlockContent blocks={description} {serializers} />
    <GoBack>
      back outta here
    </GoBack>
  </Hero>

  <section>   
    <h2>{name} Projects</h2>
    <ul>
      {#each projects as {slug, title, image, alt}}
      <li>
        <a href={`projects/${slug}`}>{title}</a>
        <img in:scale src="{image}" alt="{alt}">
      </li>
      {/each}
    </ul>  
  </section>
