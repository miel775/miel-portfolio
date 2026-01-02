import './Header.css'; 

function Header() {
  return (
    <header className="main-header">
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
}

export default Header;