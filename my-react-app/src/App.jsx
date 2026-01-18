import './general.css';
import './animation-keyframes.css';
import Section from './components/Section';
import Header from './components/header'; 
import Banner from './components/Banner';
import aboutIcon from './assets/icons/aboutIcon.png';

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <main>
        <Banner/>
        <div id="sections">
          <Section title="about" icon={aboutIcon}>
            <p>Hello there, my name is Miel and I am 25 years old!</p>
          </Section>

          <Section title="projects" icon={aboutIcon}>
            <p>These are the project where I am currently working on..</p>
          </Section>

          <Section title="video-of-me" icon={aboutIcon}>
            <p>These are the project where I am currently working on..</p>
          </Section>
        </div>
      </main>
    </div>
  );
}

export default App;