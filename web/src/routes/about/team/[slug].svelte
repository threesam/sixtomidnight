<script context="module">
  import client from "../../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "author" && slug.current == $slug][0]';
    const projection = `{
      ...,
    }`;

    const query = filter + projection;
    const teamMember = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return { teamMember };
  }
</script>

<script>
  export let teamMember;
  import GoBack from '../../../components/BackBtn.svelte'

</script>

<GoBack>
  run back!
</GoBack>

<h1>{teamMember.name}</h1>