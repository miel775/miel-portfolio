<script>
  // later you can load project data as JSON
  const projects = [
    { href: "https://triple-ired.onrender.com", img: "/projects/pokeapp.svg", alt: "Pokeapp" },
    { href: "/pages/trafficlights", img: "/projects/traffic-light.svg", alt: "Traffic light" },
    // etc...
  ];
</script>

<header>
  <div class="logo">
    <img src="./src/lib/assets/logo/logo-white-01.png" height="70" width="70">
  </div>
    <a href="/portfolio">Portfolio</a>
    <a href="/projects">Projects</a>
    <a href="/about">About Me</a>
    <a href="/contact">Contact</a>
</header>

<main class="banner">
  <img class="banner-01" src="./src/lib/assets/banner/banner-element-1.svg">
      <img class="banner-03" src="./src/lib/assets/banner/banner-element-3.svg">


  <div class="container">
    <svg>
    <filter id="grainy">
        <feTurbulence
        type="turbulence"
        baseFrequency="0.55"
        numOctaves="2"/>
    </filter>
    </svg>
  </div>
</main>

<style>
    :root {
    /* color-tone-1 */
    --color-t1: #C7CCEF;
    --color-t2: #9297C4;
    --color-t3: #0A1252;
    --color-t4: #0e0e0e;

    /* border-radius */
    --radius-desktop: 86px;
    --radius-tablet: 40px;
    --radius-mobile: 20px;

    /* border text */ 
    --border-desktop: 20px var(--color-t1);
    --border-tablet: 14px var(--color-t1);
    --border-mobile: 10px var(--color-t1);

    /* font-sizes */
    --h1-desktop: 300px;
    --h2-desktop: 128px;
    --h3-desktop: 88px;
    --p-desktop: 24px;

    --h1-tablet: 96px;
    --h2-tablet: 84px;
    --h3-tablet: 64px;
    --p-tablet: 20px;

    --h1-mobile: 84px;
    --h2-mobile: 72px;
    --h3-mobile: 48px;
    --p-mobile: 16px;
}

:global(body) {
    background-color: var(--color-t3);
}

header {
    text-decoration: none;
    height: 50px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    z-index: 2;
}


.banner {
    background-image: linear-gradient(90deg,rgba(199, 204, 239, 1) 0%, rgb(103, 110, 170) 24%, rgba(135, 149, 201, 1) 61%, rgba(146, 151, 196, 1) 87%);
    background-size: 200% 200%;
    background-position: 0% 50%;
    animation: shiftbg 10s ease-in-out infinite;
}

.container {
  height: 100vh;
  filter: url(#grainy);
  z-index: 0;
}

.banner-01{
  position: absolute;
  left: 0%;
  top: 40%;
  scale: 2;
  opacity: 0.4;
  animation: totheleft 20s infinite;
}


.banner-03{
  position: absolute;
  left: 74%;
  top: 20%;
  scale: 2;
}

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }

section {
    background-color: var(--color-t1);
    color: var(--color-t2);
    border-radius: var(--radius-desktop);

    @media (max-width:1200px) {
        border-radius: var(--radius-tablet);
    }

    @media (max-width:768px) {
        border-radius: 0;
    }

    p {
        margin: 5%;
    }
}

@keyframes shiftbg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes totheleft {
  0% {
    left: 0%;
  }

  100% {
    left: 80%;
  }
}



</style>