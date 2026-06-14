import { TESTIMONIALS } from '@/data/portfolioData';

const Testimonials = () => (
  <section id="testimonials">
    <div className="section-wrap">
      <div className="fade-up">
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">What Collaborators Say</h2>
        <p className="section-desc">
          Feedback from instructors, peers, and collaborators I&apos;ve worked with.
        </p>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div className={`testimonial-card fade-up ${t.delay}`} key={t.name}>
            <span className="testimonial-pending">Recommendation Pending</span>
            <div className="testimonial-quote">&quot;</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: t.avatarGradient }}>
                {t.avatar}
              </div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
