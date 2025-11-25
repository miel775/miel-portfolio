<script>
    import { onMount } from 'svelte';

    import Project from '$lib/components/project-display.svelte'

</script>

<section>
  <div id="titlebar">
    <img src="src/lib/assets/library/ico/about-me.png" width="32" height="32"> 
    <h2>about-me</h2>

    <div id="titlebar-decoration">
      <div id="block-1-nav"></div>
      <div id="block-2-nav"></div>
      <div id="block-3-nav"></div>
    </div>
  </div>

  <div id="content">

    <div id="text">
      <p>
        Hi, I am <strong>Miel van Sleeuwen</strong> welcome to my portfolio!<br />
        I am a <strong>25-year-old creative</strong> from the <strong>Netherlands</strong> with a passion for exploring new ideas through design and technology.
      </p>

      <p>
        My mantra is <em>“never stop exploring”</em> I believe creativity and adventure go hand in hand.  
        Im convinced the world has so much to offer when we combine <strong>creativity</strong> with <strong>curiosity</strong>.
      </p>

      <p>
        I have experience in <strong>Front-End Web Development</strong>, <strong>Video Creation</strong>, and <strong>Urban Design</strong>, blending visual storytelling with functional design to bring ideas to life.
      </p>
    </div>
      <img 
        src="src/lib/assets/about/miel.png" 
        alt="Portrait of Miel van Sleeuwen"
        width="250" 
        height="300" 
        loading="lazy"
      />
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
</style>
