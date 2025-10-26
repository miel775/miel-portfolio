<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

    import Project from '$lib/components/project-display.svelte'

    export let title;
    export let content;


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MorphSVGPlugin)
</script>

<section>
  <h2 id="title">{title}</h2>
  <p id="content">{content}</p>
</section>

<style>
  section {
    position: relative;
    height: var(--section-height);
    display: flex;
    flex-direction: column;
    padding: var(--padding-desktop);
  }

  #title {
    position: absolute;
    top: -0.7em;
    left: em;
    margin: 0;
    width: 100%;

  }

  #content {
    margin-top: calc(1em + 0.5rem); 
    padding-top: 1.5em; 
    margin-left: 0.7em;
  }
</style>
