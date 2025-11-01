<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

  import Project from "$lib/components/project-display.svelte";


  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MorphSVGPlugin);
</script>

<section>
  <h2 id="title">Portfolio</h2>
  <p id="content">
    Welcome to my portfolio, here you can take a closer look into my personal
    world. My name is Miel van Sleeuwen I am 24 years old and I am from the
    Netherlands!
    <br />
    This is my portfolio take a careful look into my world! My mantra is never stop
    exploring!I am convinced the world has so much to offer with a combination of
    creativity and adventure. Experience in Front end Web Development, Video creating
    and Urban Design.
  </p>
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
