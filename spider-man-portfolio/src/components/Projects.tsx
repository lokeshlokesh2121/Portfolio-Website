import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Legal Genius",
    description:
      "A full-stack SaaS platform for legal professionals to manage cases, documents, billing, court workflows, notifications, and legal operations efficiently.",
    image:
      "https://res.cloudinary.com/dcdorp4tr/image/upload/v1789542161/legal-genius-logo_jvtfof.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "RBAC",
    ],
    link: "https://www.legalgenius.in/",
  },

  {
    id: 2,
    title: "Axiom Safe",
    description:
      "Airport safety management platform for incident reporting, hazard tracking, audits, observations, and compliance monitoring with role-based access control.",
    image:
      "https://res.cloudinary.com/dcdorp4tr/image/upload/v1789542445/axiom_safe_mh38nr.png",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "REST API",
    ],
    link: "https://sms.quinlanbirdcargo.com",
  },

  {
    id: 3,
    title: "Professional Developer Portfolio",
    description:
      "A modern and responsive portfolio built with React, TypeScript, and modern UI techniques. Showcases projects, skills, experience, and technical expertise with a premium user experience.",
    image:
      "https://res.cloudinary.com/dcdorp4tr/image/upload/v1789542824/ChatGPT_Image_Sep_16_2026_12_43_25_PM_uqro60.png",
    technologies: [
      "React",
      "TypeScript",
      "GSAP",
      "CSS",
      "Framer Motion",
    ],
    link: "https://github.com/lokeshlokesh2121/Portfolio-Website",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="section-tag">
          FEATURED WORK
        </span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Real-world applications and products built using
          modern full-stack technologies, focused on
          performance, scalability, and user experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >
            <div className="image-wrapper">
              <img
                src={project.image}
                alt={project.title}
              />
              <div className="overlay"></div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Visit Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;