<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

  import Project from "$lib/components/project-display.svelte";


  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MorphSVGPlugin);
</script>

<section id="about" class="about-section" aria-labelledby="about-title">
  <h2 id="about-title">About</h2>

  <div class="about-content">
    <div class="about-text">
      <p>
        Hi, I’m <strong>Miel van Sleeuwen</strong> — welcome to my portfolio!<br />
        I’m a <strong>24-year-old creative</strong> from the <strong>Netherlands</strong> with a passion for exploring new ideas through design and technology.
      </p>

      <p>
        My mantra is <em>“never stop exploring”</em> — I believe creativity and adventure go hand in hand.  
        Im convinced the world has so much to offer when we combine <strong>creativity</strong> with <strong>curiosity</strong>.
      </p>

      <p>
        I have experience in <strong>Front-End Web Development</strong>, <strong>Video Creation</strong>, and <strong>Urban Design</strong>, blending visual storytelling with functional design to bring ideas to life.
      </p>
    </div>

    <figure class="about-image">
      <img 
        src="src/lib/assets/about/miel.png" 
        alt="Portrait of Miel van Sleeuwen"
        width="300" 
        height="400" 
        loading="lazy"
      />
      <figcaption>Miel van Sleeuwen — Creative Explorer</figcaption>
    </figure>
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

  img {
    border-radius: 5%;
  }
</style>
