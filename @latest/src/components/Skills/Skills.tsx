import { SKILL_CATEGORIES } from '@/data/portfolioData';

const Skills = () => (
  <section id="skills">
    <div className="section-wrap">
      <div className="fade-up">
        <div className="section-label">Skills</div>
        <h2 className="section-title">Tech I Work With</h2>
        <p className="section-desc">
          A curated set of tools and technologies I use to build AI-powered, full-stack applications.
        </p>
      </div>
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category) => (
          <div className={`skill-card fade-up ${category.delay}`} key={category.name}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon" style={{ background: category.iconBg }}>
                {category.icon}
              </div>
              <div>
                <div className="skill-cat-name">{category.name}</div>
                <div className="skill-cat-count">{category.count}</div>
              </div>
            </div>
            <div className="skill-items">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-dot" style={{ background: category.dotColor }} />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
