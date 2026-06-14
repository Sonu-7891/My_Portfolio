import { useState } from 'react';
import { NAV_LINKS } from '@/data/portfolioData';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav">
        <div className="nav-inner">
          <div className="nav-logo">SV</div>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="mailto:sonuverma789163@gmail.com" className="nav-cta">
            Hire Me
          </a>
          <button
            className="nav-mobile-btn"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu}>
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label === 'AI' ? 'AI Expertise' : link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
