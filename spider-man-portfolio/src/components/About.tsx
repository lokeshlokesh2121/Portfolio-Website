import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-grid">

        {/* LEFT IMAGE */}

        <div className="about-image-container">

          <div className="about-image-glow"></div>

          <img
            src='https://res.cloudinary.com/dcdorp4tr/image/upload/v1789540665/ChatGPT_Image_Sep_16_2026_12_07_05_PM_xavmwb.png'
            alt="Lokesh Immandi"
            className="about-image"
          />



        </div>

        {/* RIGHT CONTENT */}

        <div className="about-content">

          <span className="section-label">
            PERSONA
          </span>

          <h2 className="about-title">
            Bridging Logic &
            <span> Creativity</span>
          </h2>

          <p className="about-description">
            I am a Full Stack Developer with experience building
            scalable SaaS platforms and enterprise applications
            using React.js, TypeScript, Node.js, Express.js,
            and MongoDB.

            My focus is creating high-performance applications
            that combine beautiful user experiences with
            reliable backend architecture.
          </p>

          <p className="about-description">
            From frontend interfaces to backend systems,
            I enjoy transforming complex requirements into
            clean, scalable, and maintainable solutions.
          </p>

          <div className="about-highlights">

            <div className="highlight-card">
              <span>⚛️</span>
              <p>React.js & TypeScript</p>
            </div>

            <div className="highlight-card">
              <span>🚀</span>
              <p>Node.js & Express</p>
            </div>

            <div className="highlight-card">
              <span>🗄️</span>
              <p>MongoDB & REST APIs</p>
            </div>

            <div className="highlight-card">
              <span>🔒</span>
              <p>JWT & RBAC Security</p>
            </div>

          </div>

          <div className="stats">

            <div className="stat">
              <h3>1.5+</h3>
              <span>Years Experience</span>
            </div>

            <div className="stat">
              <h3>450+</h3>
              <span>DSA Problems</span>
            </div>

            <div className="stat">
              <h3>10+</h3>
              <span>Projects Built</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;