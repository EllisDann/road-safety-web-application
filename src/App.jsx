import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import About from "./components/About";
import Contact from "./components/Contact";
import mslogo from "./assets/mslogo.png";
import "./App.css";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="top-nav">
        <div className="logo">
          <img src={mslogo} alt="MS Traffic" className="logo-img" />
        </div>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection('whatwedo')}>What We Do</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </div>
      <main>
        <Hero />
        <WhatWeDo />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
