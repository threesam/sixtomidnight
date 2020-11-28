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
  export let service;
  const {name, image, alt, description, projects} = service

  import GoBack from '../../components/BackBtn.svelte'
  import Hero from '../../components/Hero.svelte'
</script>

<style>
  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    position: relative;
    width: 100%;
    height: 30vh;
  }

  a {
    font-size: 1.5rem;
    display: grid;
    place-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    filter: grayscale(90%);
    text-shadow: 0 0 25px black;
    font-size: 2rem;
  }
  a:hover {
    filter: grayscale(30%);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
  }
</style>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<article>

    
    <Hero data={service}>
      <BlockContent blocks={description} {serializers} />
      <GoBack>
        back outta here
      </GoBack>
    </Hero>
    
    
  
  
  <section>
    
    <h2>Related Projects</h2>
    <ul>
      {#each projects as {slug, title, image, alt}}
      <li>
        <a href={`projects/${slug}`}>{title}</a>
        <img src="{image}" alt="{alt}">
      </li>
      {/each}
    </ul>
    
  </section>
</article>