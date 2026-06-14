import { ACHIEVEMENTS } from '@/data/portfolioData';

const Achievements = () => (
  <section id="achievements">
    <div className="section-wrap">
      <div className="fade-up">
        <div className="section-label">Achievements</div>
        <h2 className="section-title">Milestones & Recognition</h2>
        <p className="section-desc">
          Key accomplishments across education, projects, and professional development.
        </p>
      </div>
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((ach) => (
          <div className={`ach-card fade-up ${ach.delay}`} key={ach.title}>
            <span className="ach-icon">{ach.icon}</span>
            <div>
              <div className="ach-title">{ach.title}</div>
              <div className="ach-desc">{ach.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
