<script>
  // later you can load project data as JSON
  const projects = [
    { href: "https://triple-ired.onrender.com", img: "/projects/pokeapp.svg", alt: "Pokeapp" },
    { href: "/pages/trafficlights", img: "/projects/traffic-light.svg", alt: "Traffic light" },
    // etc...
  ];
</script>

<main>
  <section id="about-me">
    <h1>Miel</h1>
    <p id="introduction-text">
      My name is Miel van Sleeuwen...
    </p>
    <img id="introduction-logo" src="/logo-henricus.png" alt="logo of Miel" />
  </section>

  <section class="projects">
    <h2>Projects</h2>
    <p>These are all the projects I am working on..!</p>

    <div id="projects">
      {#each projects as project}
        <a class="project" href={project.href}>
          <img src={project.img} alt={project.alt} width="50" height="50" loading="lazy" />
        </a>
      {/each}
    </div>
  </section>
</main>