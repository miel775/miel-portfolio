import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo';

function Header() {
  return (
    <header className="main-header">
      <div class="logo-header">
        <Link to="/"><Logo width={64} height={64} /></Link>
      </div>
      <div className="navigation">
        <div class="button">
        <Link to="/about">About</Link>
        </div>

        <div class="button">
        <Link to="/projects">Projects</Link>
        </div>

        {/* <div class="button">
        <Link to="/library">Library</Link>
        </div>*/}

        <div class="button">
        <Link to="/blog">Blogs</Link>
        </div> 
        
        <div class="button">
        <Link to="/contact">Contact</Link>
        </div>

      </div>
    </header>
  );
}

export default Header;