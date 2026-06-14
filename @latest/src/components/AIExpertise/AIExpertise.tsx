import { AI_CAPABILITIES } from '@/data/portfolioData';

const AIExpertise = () => (
  <section id="ai-expertise">
    <div className="section-wrap">
      <div className="fade-up">
        <div className="section-label">AI Focus</div>
        <h2 className="section-title">AI & Automation Capabilities</h2>
        <p className="section-desc">
          Actively building expertise in the tools and systems that define the future of software engineering.
        </p>
      </div>
      <div className="ai-grid">
        {AI_CAPABILITIES.map((cap) => (
          <div className={`ai-card fade-up ${cap.delay}`} key={cap.name}>
            <span className="ai-icon">{cap.icon}</span>
            <div className="ai-name">{cap.name}</div>
            <div className="ai-sub">{cap.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIExpertise;
