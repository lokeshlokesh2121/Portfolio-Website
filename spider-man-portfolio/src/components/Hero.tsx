import "../styles/Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <span className="hero-subtitle">HEY, I'M LOKESH</span>

        <h1 className="hero-title">
          Crafting Digital
          <br />
          <span className="italic-text">Excellence</span>
          <span className="normal-text"> from</span>
          <br />
          End to End
        </h1>

        <div className="hero-tags">
          <span>React.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>

        <p className="hero-description">
          Full Stack Developer building scalable SaaS
          applications with React, Node.js, MongoDB,
          TypeScript and modern cloud technologies.
        </p>

        <a href="#projects" className="hero-button">
          View Projects
          <FaArrowRight />
        </a>
      </div>

      {/* CENTER IMAGE */}
      <div className="hero-center">
        <div className="hero-image-card">
          <img
            src="https://res.cloudinary.com/dcdorp4tr/image/upload/v1788969037/profile_er6r9s.png"
            alt="Lokesh"
            className="hero-image"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="hero-right">
        <p>
          I build scalable web applications that combine
          modern UI design with robust backend systems.
          Passionate about creating high-performance
          digital products using the MERN stack and
          modern web technologies.
        </p>
      </div>
    </section>
  );
};

export default Hero;