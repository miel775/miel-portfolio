import './Header.css'; 
import Logo from './Logo.jsx'

function Header() {
  return (
    <header className="main-header">
      <div class="logo-header">
      <Logo />
      </div>
      <div className="navigation">
        <div class="button">
        <a href="/">Home</a>
        </div>
        <div class="button">
        <a href="/portfolio">Portfolio</a>
        </div>
        <div class="button">
        <a href="/about">About</a>
        </div>
        <div class="button">
        <a href="/contact">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;