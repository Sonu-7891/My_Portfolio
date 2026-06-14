import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = '404 — Sonu Verma';
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="portfolio-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'auto',
      }}
    >
      <div style={{ textAlign: 'center', padding: '32px' }}>
        <h1 style={{ fontSize: '64px', fontWeight: 800, marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Oops! Page not found
        </p>
        <a href="/" className="btn-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
