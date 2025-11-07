<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

    import Project from '$lib/components/project-display.svelte'

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(MorphSVGPlugin)
</script>

<section>
  <div id="titlebar">
    <img src=".src/lib/assets/library/ico/about-me" width="32" height="32"> 
    <h2>about-me</h2>

    <div id="interactiv-buttons">
      <div id="shape-1"></div>
      <div id="shape-2"></div>
      <div id="shape-3"></div>
    </div>
  </div>

  <div id="content">
  <p id="content">These are my projects I have worked on.</p>
  </div>
</section>

<style>
  section {
    position: relative;
    height: var(--section-height);
    display: flex;
    flex-direction: column;
    padding: var(--padding-desktop);
  }

  #titlebar {
    width: 100%;
    height: 2em;
    background-color: var(--primary-color);
    padding: 10px;

    h2{
    position: relative;
    margin: 0;
    width: 100%;
    }
  }

  #interactive-buttons {
    display: flex;
    gap: 0.2em;
  }

  #shape-1 {
    display: block;
    height: 1.5em;
    width: 1.5em;
    background-color: var(--neutral-color-light-2);
  }

  #shape-2 {
    display: block;
    height: 1.5em;
    width: 1.5em;
    background-color: var(--neutral-color-light-2);
  }

  #shape-3 {
    display: block;
    height: 1.5em;
    width: 1.5em;
    background-color: darkred;
  }


  #content {
    margin-top: calc(1em + 0.5rem); 
    padding-top: 1.5em; 
    margin-left: 0.7em;
  }
</style>
