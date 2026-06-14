import { PROJECTS } from '@/data/portfolioData';

const Projects = () => (
  <section id="projects">
    <div className="section-wrap">
      <div className="fade-up">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-desc">
          Production-quality projects demonstrating full-stack development, API integration, and scalable architecture.
        </p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className={`project-card fade-up ${project.delay}`} key={project.title}>
            <div className="project-glow" style={{ background: project.glowColor }} />
            <div
              className="project-label"
              style={{
                background: project.labelStyle.background,
                border: project.labelStyle.border,
                color: project.labelStyle.color,
              }}
            >
              {project.label}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-problem">{project.problem}</div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-impact">{project.impact}</div>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span className="tech-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link primary">
                GitHub →
              </a>
              <a href={project.secondaryLink} className="project-link secondary">
                {project.secondaryLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
