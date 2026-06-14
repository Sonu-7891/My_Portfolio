import { EXPERIENCE_ITEMS } from '@/data/portfolioData';

const Experience = () => (
  <section id="experience">
    <div className="section-wrap">
      <div className="fade-up">
        <div className="section-label">Experience</div>
        <h2 className="section-title">My Professional Journey</h2>
        <p className="section-desc">
          Building skills through education, projects, and hands-on development across the full stack.
        </p>
      </div>
      <div className="timeline">
        {EXPERIENCE_ITEMS.map((item) => (
          <div className={`timeline-item fade-up ${item.delay}`} key={item.role}>
            <div className="timeline-dot-wrap">
              <div className={`timeline-dot ${item.dotClass}`}>{item.icon}</div>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="timeline-role">{item.role}</span>
                <span className="timeline-company">{item.company}</span>
              </div>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-desc">{item.desc}</div>
              {item.achievements.length > 0 && (
                <ul className="timeline-achievements">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              <div className="timeline-tech">
                {item.tech.map((tech) => (
                  <span className="tech-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
