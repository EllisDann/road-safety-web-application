import "./Navbar.css";



export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo">MS Traffic</div>

        <div className="nav-links">
          <a href="#whatwedo">What We Do</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  )
}