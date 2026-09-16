import "../styles/Navbar.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Software Developer</span>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Section */}
        <div className="navbar-actions">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>

          <a href="#contact" className="talk-btn">
            Let's Talk
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;