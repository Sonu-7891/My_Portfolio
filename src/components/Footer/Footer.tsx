import { FOOTER_LINKS } from '@/data/portfolioData';

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div className="footer-copy">© 2025 Sonu Verma · Built with ❤️ and a lot of CSS</div>
      <div className="footer-links">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
