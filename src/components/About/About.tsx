import { ABOUT_CHIPS, FLOATING_CARDS } from '@/data/portfolioData';

const About = () => (
  <section id="about">
    <div className="section-wrap">
      <div className="about-grid">
        <div className="about-visual fade-up">
          <div className="about-card-main">
            <div className="about-avatar">SV</div>
            <div className="about-card-name">Sonu Verma</div>
            <div className="about-card-role">AI Engineer & Full Stack Developer</div>
            <div className="about-chips">
              {ABOUT_CHIPS.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="about-info-row">
              <span className="about-info-icon">📍</span> Jaipur, Rajasthan, India
            </div>
            <div className="about-info-row">
              <span className="about-info-icon">📧</span> sonuverma789163@gmail.com
            </div>
            <div className="about-info-row">
              <span className="about-info-icon">📞</span> +91 7891632981
            </div>
            <div className="about-info-row">
              <span className="about-info-icon">🌐</span> Open to Remote Globally
            </div>
          </div>
          <div className="floating-cards">
            {FLOATING_CARDS.map((card) => (
              <div className="float-card" key={card.title}>
                <div className="float-icon" style={{ background: card.bg }}>
                  {card.icon}
                </div>
                <div>
                  <div className="float-text-main">{card.title}</div>
                  <div className="float-text-sub">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-text fade-up fade-up-delay-2">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Turning Ideas Into Intelligent Products</h2>
          <div className="about-story">
            <p>
              I&apos;m a <strong>Frontend Developer actively transitioning into AI Engineering</strong>,
              with a proven ability to learn and ship new tech fast. Currently pursuing Full Stack Web
              Development at <strong>Prepleaf By Masai</strong>, I work at the intersection of modern UI,
              backend systems, and emerging AI technologies.
            </p>
            <p>
              My approach is <strong>product-first</strong>: I don&apos;t just write code — I understand the
              business problem, architect a scalable solution, and leverage{' '}
              <strong>Generative AI tools</strong> to accelerate delivery. From cloning production-grade web
              apps to integrating Node.js APIs, I build with quality and scalability in mind.
            </p>
            <p>
              I&apos;m passionate about the <strong>AI revolution in software development</strong> — from prompt
              engineering and LLM integrations to automated workflows. My goal is to join a team where I can
              both contribute immediately and grow into senior AI engineering roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
