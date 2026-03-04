import '../general.css';
import '../animation-keyframes.css';
import Section from '../components/Section';
import Banner from '../components/Banner';
import aboutIcon from '../assets/icons/aboutIcon.png';
import projects from '../assets/icons/projects.png';
import videoOfMe from '../assets/icons/videoOfMe.png';

function Home() {
  return (
        <main>
          <Banner/>
          <div id="sections">
            <Section title="about" icon={aboutIcon}>
              <div id="about-section">
                <img
                  id="section-picture"
                  src="/src/assets/pictures/about-picture.png"
                  width="100"
                  alt="About"
                />
                <p id="paragaph-about">
                  Hi, I'm Miel van Sleeuwen!I'm 25 years old and proudly from the Netherlands.
                  <br/>
                  <br/>
                  Welcome to my portfolio I invite you to take a closer look into my world. My guiding mantra is “never stop exploring.”
                  <br/>
                  <br/>
                  I truly believe that the world has so much to offer when creativity and curiosity come together.

                  <br/>
                  <br/>
                  I have experience in Front-End Web Development, Video Creation, and Urban Design, and I’m always eager to learn and grow in these fields.
                </p>
              </div>
            </Section>

            <Section title="projects" icon={projects}>
              <div id="project-overview-section">
                <div id="project-boxes">
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
              </div>
            </Section>

            <Section title="video-of-me" icon={videoOfMe}>
              <video width="100%" controls>
                <source src="/src/assets/video-of-me/video-of-me.mp4" type="video/mp4" />
              </video>
            </Section>
          </div>
        </main>
          );
}
export default Home;