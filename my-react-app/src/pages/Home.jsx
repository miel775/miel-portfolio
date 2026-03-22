
import { useState } from 'react';
import Section from '../components/Section';
import Banner from '../components/Banner';
// Icons
import aboutIcon from '../assets/icons/aboutIcon.png';
import bieb from '../assets/icons/biebinbloeiIcon.png';
import dda from '../assets/icons/ddaIcon.png';
import pokeapp from '../assets/icons/pokemonIcon.png';
import metro from '../assets/icons/metroIcon.png';
import snappthis from '../assets/icons/snappthisIcon.png';
import projects from '../assets/icons/projects.png';
import videoOfMe from '../assets/icons/videoOfMe.png';

// Pictures & Video
import aboutPicture from '../assets/pictures/about-picture.png';
import projectBieb from '../assets/projects/project-bieb-in-bloei.png';
import projectDda from '../assets/projects/project-dda.png';
import projectMetro from '../assets/projects/project-metro-stations.png';
import projectPokeapp from '../assets/projects/project-pokeapp.png';
import projectSnappthis from '../assets/projects/project-snappthis-01.png';
import myVideo from '../assets/video-of-me/video-of-me.mp4';


const projectsData = [
  {
    id: 'bieb',
    title: 'Bieb in bloei',
    icon: bieb, 
    image: projectBieb, 
    link: 'https://pleasurable-ui-ep7m.onrender.com',
    description: 'This was one of the first projects I did in my degree. We had to make a website for a client for a garden library. This project made only with HTML and CSS.'
  },
  {
    id: 'dda',
    title: 'DDA',
    icon: dda,
    image: projectDda, 
    link: '#', 
    description: 'Slowly trying to learn a new programming language to get grib on server side rendering. This project was also one of the first steps to learn to work in a team.'
  },
  {
    id: 'snappthis',
    title: 'SnappThis',
    icon: snappthis,
    image: projectSnappthis, 
    link: 'https://snappthis.vercel.app',
    description: 'This project has been made in the second year of my degree. We trying to work in a working method calling Agile. For a semester we made this app which is basically a photo mindmap for students. Such a challanging project.'
  },
  {
    id: 'pokeapp',
    title: 'PokeApp',
    icon: pokeapp,
    image: projectPokeapp, 
    link: '#',
    description: 'For the introduction of Tripe we made this PokeApp with the public PokeAPI. Learning about how to work with an API.'
  },
  {
    id: 'metro',
    title: 'Metro',
    icon: metro,
    image: projectMetro, 
    link: 'https://www.youtube.com/watch?v=1hBIUlokmBw',
    description: 'Ever noticed the sounds of a metro? Yes, they sound catchy! Every thought how this would sound in other countries? Right, watch the compilation here!'
  }
];


function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projectsData[activeIndex];
  return (
        <main>
          <Banner/>
          <div id="sections">
            <Section title="about" icon={aboutIcon}>
              <div id="about-section">
                <img
                  id="section-picture"
                  src={aboutPicture}
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
      
      <div id="project-buttons">
        {/* We map through our array to generate the buttons automatically */}
        {projectsData.map((project, index) => (
          <button 
            key={project.id}
            className={`button ${activeIndex === index ? 'active' : ''}`} 
            onClick={() => setActiveIndex(index)}
          >
            <img src={project.icon} width="32" alt={`${project.title} icon`} />
            <p>{project.title}</p>
          </button>
        ))}
      </div>

      <div id="project-example">
        {/* We inject the data from our activeProject variable here */}
        <a id="box-one" href={activeProject.link}>
          <img src={activeProject.image} width="500" alt={`${activeProject.title} preview`} />
        </a>
        
        <div id="project-content">
          <div id="projects-titlefield">
            <h2>{activeProject.title}</h2>
          </div>
          <div id="projects-textfield">
            <p>{activeProject.description}</p>
          </div>
        </div>
      </div>

    </Section>

            <Section title="video-of-me" icon={videoOfMe}>
              <video width="100%" controls>
                <source src={myVideo} type="video/mp4" />
              </video>
            </Section>
          </div>
        </main>
          );
}
export default Home;