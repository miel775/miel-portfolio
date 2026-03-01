import '../general.css';
import Logo from '../assets/logo/Logo';
import RegularCow from '../assets/library/animals/regularCow'
import AmsterdamCarMini from '../assets/library/amsterdam/amsterdamCarMini'



function Footer( ) {
  return (
    <footer className="main-footer">
      <div id="footerPartOne">
        <AmsterdamCarMini/>
      </div>
      <div id="footerPartTwo">
        <div id="footer-logo">
          <Logo />
          <div id="footer-name">
            <p>Miel</p>
            <p>Henricus</p>
            <p>van Sleeuwen</p>
          </div>
        </div>
    
    <div id="navigation-links">
      <a href="https://github.com/miel775">
        <img src="./src/assets/icons/githubIcon.png" width="64" alt="github icon"></img>
        <p>Github</p>
      </a>
      <a href="https://www.youtube.com/@mhvs775">
        <img src="./src/assets/icons/youTubeIcon.png" width="64" alt="Youtube icon"></img>
        <p>Youtube</p>
      </a>
      <a href="https://www.linkedin.com/in/miel-van-sleeuwen-364766152/">
        <img src="./src/assets/icons/linkedinIcon.png" width="64" alt="LinkedIn icon"></img>
        <p>Linkedin</p>
      </a>
      <a href="https://www.linkedin.com/in/miel-van-sleeuwen-364766152/">
        <img src="./src/assets/icons/palletIcon.png" width="64" alt="LinkedIn icon"></img>
        <p>Codepen</p>
      </a>
    </div>

    <p>&copy; {new Date().getFullYear()} Miel van Sleeuwen. All rights reserved.</p>

    </div>

    <div id="footerPartThree">
      <RegularCow/>
    </div>

    <button id="footer-backToTop" class="button">
      <img src="./src/assets/icons/homeIcon.png" width="32" alt="LinkedIn icon"></img>
      <p>Back to the top</p>
    </button>

    </footer>
  );
}

export default Footer;