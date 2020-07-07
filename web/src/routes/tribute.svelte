<script>
  import { blur, fade, slide } from 'svelte/transition'

  import OldBlurb from '../components/OldBlurb.svelte'
  import TributeLinks from '../components/TributeLinks.svelte'

  let clip = 'website.mp4'
</script>

<style>
  section {
    position: relative;
    height: calc(100vh - var(--nav-height));
    left: 0;
    width: 100%;
    display: grid;
    place-content: center;
    text-align: center;
    color: var(--accent);
    background: black;
    overflow-x: hidden;
  }
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--black) url('logoMain.svg') no-repeat center center/cover;
  }
  .video-container:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  video {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content {
    z-index: 10;
  }
  .grid {
    width: 100%;
    display: grid;
    place-content: center;
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>Tribute</title>
</svelte:head>

<section>
  <div class="video-container">
    <video src={clip} autoplay loop muted />
  </div>
  <div class="content">
    <h2>Remembering</h2>
    <h1>102 Jackson Street</h1>
  </div>
</section>
<OldBlurb />
<div class="grid">
  <TributeLinks />
</div>
