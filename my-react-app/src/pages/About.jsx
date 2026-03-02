import MiniBanner from '../components/MiniBanner';
import Section from '../components/Section';

import MiniSection from '../components/MiniSection';
import '../stylesheets/about.css';


function About() {
  return (
    <main>
      <MiniBanner title="About" />
        <div class="mini-sections">
          <MiniSection title="year-2000" image="src/assets/pictures/year-2000.png">
            <div id="mini-section-year-2000">
              <p>Born in a warm nest 'Arendnest' in Boekel the youngest of 4.
                <br></br>
              This is where the story began</p>
            </div>
          </MiniSection>

          <MiniSection title="year-2005" image="src/assets/pictures/year-2005.png" id="direction-change">
            <div id="mini-section-year-2005">
              <p>My favorite subject back in school was painting. Actually the first step to creativity.</p>
            </div>
          </MiniSection>

          <MiniSection title="year-2008" id="direction-change">
            <div id="mini-section-year-2008">
              <iframe width="200" height="155" src="https://www.youtube.com/embed/LAp_EBHPuOU?si=Uccje37Y_PQprfk3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
              <p>First ever released video on YouTube under the name ‘miel775’. My sister inspired me to make this ‘winx’ animation.</p>
            </div>
          </MiniSection>

          <MiniSection title="year-2009" image="src/assets/pictures/year-2009.svg" id="direction-change">
            <div id="mini-section-year-2005">
              <p>My inspiration came particularly from Nintendo, remembering receiving this with cummunion. </p>
            </div>
          </MiniSection>

          <MiniSection title="year-2012" image="src/assets/pictures/year-2012.png">
            <div id="mini-section-year-2012">
              <p>When I had an obsession, I had it severly. Always was interested in weather, greography also liked to make vlogs with my 3DS.</p>
            </div>
          </MiniSection>

          <MiniSection title="year-2015" id="direction-change">
            <div id="mini-section-year-2015">

              <p>Publishing my content about the obsession I had with technology. Made this the first ever released Windows Expert video</p>
              
            </div>
          </MiniSection>
        </div>

        <h2>2005</h2>
        <p>M-kids era, bands were it back in those days and I truly contributed with this. True fan of M-kids not only because the M is in this but also of the 2000s aesthetic</p>

        <h2>2008</h2>
        <p>Got inspired by my sister for making animation, she made these funny WINX animation which I also tried to do this is the result.</p>


        <h2>2012</h2>
        <p>I was always inspired to make my own cartoon, this is called "Fody" a pacman-ish styled cartoon who travels all around the world.</p>

        <h2>2016</h2>
        <p>Windows Expert was started here. Out if interest of the technology revolution of the last 50 years. This is where I made up the first video about the history of Microsoft Windows.</p>

        <h2>2018</h2>
        <p>Ending my teenage years to enter the world of urbanism. This is the year where I started my course Urban Design at the Koning Willem 1 College in 's-Hertogenbosch.</p>

        <h2>2022</h2>
        <p>Graduating from the study Urban Design. Had a couple of interesting internships click on the building to get to know about my internship periods with Urabn Design</p>

        <h2>2022</h2>
        <p>Starting to explore the world with my suitcase with interrailing through Europe and Asia. Read all about my adventures when you click on the earth</p>

        <h2>2025</h2>
        <p>Trying to stay active to talk about mental health is a very imporant factor for me. So I followed the Social Boost at the organisation JoinUs.</p>

        <h2>2026</h2>
        <p>Graduating for my Front End Developer Diploma</p>
    </main>
  );
}

export default About;
