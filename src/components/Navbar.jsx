import "./Navbar.css";
import mslogo from "../assets/mslogo.png";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo">
          <img src={mslogo} alt="MS Traffic" className="logo-img" />
        </div>

        <div className="nav-buttons">
          <button onClick={() => scrollToSection('whatwedo')}>What We Do</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

      </div>
    </nav>
  )
}