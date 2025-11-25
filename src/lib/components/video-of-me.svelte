<script>
    import { onMount } from 'svelte';

    import Project from '$lib/components/project-display.svelte'

</script>

<section>
  <div id="titlebar">
    <img src="src/lib/assets/library/ico/video-of-me-icon.png" width="32" height="32"> 
    <h2>video-of-me</h2>

    <div id="titlebar-decoration">
      <div id="block-1-nav"></div>
      <div id="block-2-nav"></div>
      <div id="block-3-nav"></div>
    </div>
  </div>

  <div id="content">

<video controls>
  <source src="./src/lib/assets/video-of-me/video-of-me.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </div>

</section>

<style>
  section {
    position: relative;
    height: var(--section-height);
    display: flex;
    flex-direction: column;
    padding: var(--padding-desktop);
    border: 2px solid black;

    @media (max-width: 720px) {
        margin-left: -1em;
        margin-right: -1em;
          }
  }

  #titlebar {
    width: 100%;
    height: 3em;
    background-color: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;

    h2{
    position: relative;
    margin: 0;
    width: 100%;
    }
  }

  #titlebar-decoration {
    display: flex;
    gap: 0.3em;
    position: relative;
    right: 15px;
  }

  #text {
    padding: 1em;
    width: 80%;
  }

  #block-1-nav {
    display: block;
    height: 1.5em;
    width: 1.5em;
    background-color: var(--neutral-color-light-2);
  }

  #block-2-nav {
    display: block;
    height: 1.5em;
    width: 1.5em;
    background-color: var(--neutral-color-light-2);
  }

  #block-3-nav {
    display: block;
    height: 1.5em;
    width: 1.5em;
    background-color: darkred;
  }


  #content {
    margin-top: calc(1em + 0.5rem); 
    display: flex;
    padding: 2em;

    @media (max-width: 720px) {
        margin-left: -1em;
        margin-right: -1em;
        flex-direction: column;
        justify-content: center;
    }
  }

  video {
    min-width: 500px;
  }
</style>
