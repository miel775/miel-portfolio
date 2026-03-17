import { useState, useEffect } from 'react';
import '../stylesheets/general.css';
import Logo from '../assets/logo/logo';
import RegularCow from '../assets/library/animals/regularCow'
import AmsterdamCarMini from '../assets/library/amsterdam/amsterdamCarMini'

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    style.display = "block";
  } else {
    display = "none";
  }
}



function Footer( ) {
const [isVisible, setIsVisible] = useState(false);

  // 3. Listen to the scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      // If we scroll down past 20px, set isVisible to true
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 4. Create the function that actually scrolls the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // This gives it a nice, smooth gliding effect
    });
  };

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

    <button 
        id="footer-backToTop" 
        onClick={scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <img src="./src/assets/icons/homeIcon.png" width="32" alt="Home icon" />
      </button>

    </footer>
  );
}

export default Footer;