import "./Hero.css";
import roadImage from "../assets/road.webp";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>M&S Traffic</h1>
        <p>Specialised consultancy solving complex traffic issues with over 50 years of engineering experience</p>
        <button className="hero-button">Get in Touch</button>
      </div>
    </section>
  )
}
