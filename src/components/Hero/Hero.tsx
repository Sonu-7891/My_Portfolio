import { HERO_STATS } from '@/data/portfolioData';

const Hero = () => (
  <section id="hero">
    <div
      className="glow-orb"
      style={{
        width: '600px',
        height: '600px',
        top: '-200px',
        right: '-100px',
        background: 'rgba(124,58,237,0.15)',
      }}
    />
    <div
      className="glow-orb"
      style={{
        width: '400px',
        height: '400px',
        top: '200px',
        left: '-100px',
        background: 'rgba(6,182,212,0.08)',
      }}
    />
    <div className="hero-inner">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Available for opportunities
      </div>
      <h1 className="hero-headline">
        <span className="line1">Building AI-Powered</span>
        <span className="line2">Products That Solve</span>
        <span className="line1">Real Problems</span>
      </h1>
      <p className="hero-sub">
        Frontend Developer evolving into an AI Engineer — crafting LLM applications,
        automation systems, and full-stack SaaS products that deliver measurable business value.
      </p>
      <div className="hero-typing" id="typingText" />
      <div className="hero-cta-row">
        <a href="#projects" className="btn-primary">
          <span>View My Work</span>
          <span>→</span>
        </a>
        <a href="#contact" className="btn-secondary">
          <span>Let&apos;s Connect</span>
        </a>
        <a href="mailto:sonuverma789163@gmail.com" className="btn-secondary">
          <span>📄</span>
          <span>Download Resume</span>
        </a>
      </div>
      <div className="hero-stats">
        {HERO_STATS.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-number" data-count={stat.count}>
              0
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="hero-scroll">
      <span>Scroll</span>
      <div className="scroll-line" />
    </div>
  </section>
);

export default Hero;
