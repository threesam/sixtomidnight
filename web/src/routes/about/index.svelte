<script context="module">
  import client from '../../sanityClient'
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  export async function preload({ params, query }) {
    const about = await client.fetch(
      `*[_type == "page" && title == "About Us"][0]{
        title,
        "image": mainImage.asset->url,
        "alt": mainImage.alt,
        body[]{
          ...,
          children[]{
            ...
          }
        }
      }`,
    )
    return { about }
  }
</script>

<script>
    import { fly, fade } from 'svelte/transition'

  export let about
  const {title, image, alt, body} = about
  console.log(about)
</script>

<style>
  article {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <section>
    <h1>{title}</h1>
    <img in:fade src="{image}" {alt} />
    <div in:fly={{ y: -100 }}>
      <BlockContent blocks={body} {serializers} />
    </div>
    <a href="/about/tribute">tribute</a>
    <a href="/about/team">team</a>
  </section>
</article>
