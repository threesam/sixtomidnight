<script>
  import { fly, blur } from 'svelte/transition'

  export let index
  export let teamMember
  const { name, image, alt, caption, slug } = teamMember
</script>

<div transition:fly={{ x: -200, delay: index * 100 }}>
  <h2>{name}</h2>
  <span>more about</span>
  <a href={`/about/team/${slug}`}>{name}</a>
  <figure>
    <img src={`${image}?fit=crop&crop=entropy&w=250&h=250`} {alt} />
    <figcaption>{caption}</figcaption>
  </figure>
</div>
