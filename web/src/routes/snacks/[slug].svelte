<script context="module">
  import client from "../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "post" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            _type,
            author->
          }
        }
      }
    }`;

    const query = filter + projection;
    const post = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return { post };
  }
</script>

<script>
  export let post;

    import GoBack from '../../components/BackBtn.svelte'

</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<GoBack>
  back outta here
</GoBack>

<h1>{post.title}</h1>

<div class="content">
  <BlockContent blocks={post.body} {serializers} />
</div>
