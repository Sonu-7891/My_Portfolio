import { FormEvent, useRef, useState } from 'react';
import { CONTACT_LINKS } from '@/data/portfolioData';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="contact-wrap">
          <div className="fade-up">
            <div className="section-label" style={{ justifyContent: 'center' }}>
              Contact
            </div>
            <h2 className="section-title">Let&apos;s Build Something Together</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '480px' }}>
              Whether you have a role, a project, or just want to connect — my inbox is always open.
              Typically respond within 24 hours.
            </p>
          </div>
          <div className="contact-card fade-up fade-up-delay-1">
            <form ref={formRef} className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about the opportunity or project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  ...(submitted
                    ? { background: 'linear-gradient(135deg,#059669,#10B981)' }
                    : {}),
                }}
              >
                {submitted ? (
                  <>
                    <span>✅</span>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span>{link.icon}</span> {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
