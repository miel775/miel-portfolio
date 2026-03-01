import MiniBanner from '/src/components/MiniBanner';

import Block from '/src/components/block';

function ProjectsOverview() {
  return (
    <main>
      <MiniBanner title="Projects" />

      {/* make container section */}

      <h2>Front End Projects</h2>

      <Block/>

                      <div id="project-boxe">
                  <a id="box-one" href="https://miel775.github.io/the-client-website/">
                    <img src="/src/assets/projects/project-bieb-in-bloei.png" width="500"></img>
                  </a>
                  <a id="box-two" href="https://pleasurable-ui-ep7m.onrender.com">
                    <img src="/src/assets/projects/project-dda.png" width="500"></img>
                  </a>
                  <a id="box-three" href="">
                      <img src="/src/assets/projects/project-metro-stations.png" width="500"></img>
                  </a>
                  <a id="box-four">
                      <img src="/src/assets/projects/project-pokeapp.png" width="500"></img>
                  </a>
                </div>

      <section id="projects">
        <img src="https://media.licdn.com/dms/image/v2/C4E12AQEDHtUmDLS3yQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520046874939?e=2147483647&v=beta&t=9r5LerPDALfUQW36HYezN-aRfmXdJsWrtjJ-j-VDZAs" width="200"></img>
        <h3>SnappThis</h3>
        <p></p>
      </section>

        <section id="projects">
          <img src="https://media.licdn.com/dms/image/v2/C4E12AQEDHtUmDLS3yQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520046874939?e=2147483647&v=beta&t=9r5LerPDALfUQW36HYezN-aRfmXdJsWrtjJ-j-VDZAs" width="200"></img>
          <h3>PokeApp</h3>
          <p>For</p>
        </section>

        <h2>Urban Design Projects</h2>
    </main>
  );
}

export default ProjectsOverview;
