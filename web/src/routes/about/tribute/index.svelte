<script>
  import { blur, fade, slide } from 'svelte/transition'

  import OldBlurb from './OldBlurb.svelte'
  import TributeLinks from './TributeLinks.svelte'

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

    animation-name: afterFade;
    animation-duration: 2s;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @keyframes afterFade {
    0% {
      background-color: rgba(0, 0, 0, 1);
    }
    25% {
      background-color: rgba(0, 0, 0, 1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .logo-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }
  /* #logo-ticks {
    width: 350px;
  } */
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
  .banner {
    width: 100%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.29);
    position: relative;
    background: rgba(var(--rgb-black), 0.69);
    margin-top: 3rem;
    box-shadow: 0 -0.5rem 0.5rem rgba(0, 0, 0, 0.69);
  }
  .banner img {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -10;
  }
  h1 {
    font-size: 1.7rem;
  }
  /* #open-mic-img {
    width: 100vw;
  }
  #open-mic-img img {
    width: 100%;
  } */
</style>

<svelte:head>
  <title>Tribute</title>
</svelte:head>

<section>
  <div class="video-container">
    <video
      src={clip}
      autoplay
      loop
      muted
      playsinline
      aria-label="a six to midnight productions montage" />
  </div>
  <div in:blur class="content">
    <h2>Remembering</h2>
    <h1>102 Jackson Street</h1>
  </div>
  <div class="logo-container">
    <!-- <img src="logoTicks.png" alt="outline of a clock" id="logo-ticks" /> -->
  </div>
</section>

<OldBlurb />

<div class="grid">
  <TributeLinks />
</div>

<div class="banner">
  <img src="soundcloudbanner.jpg" alt="Six to Midnight banner" />
</div>
<!-- <div id="open-mic-img">
  <img src="bennyOpenMic.png" alt="Benny P playing at open mic" />
</div> -->
