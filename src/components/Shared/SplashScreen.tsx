import { useState, useEffect, useRef } from 'react';
import svLogo from '@/assets/sv-logo.svg';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'shrink' | 'done'>('enter');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('hold'), 600);
    const holdTimer = setTimeout(() => setPhase('shrink'), 1600);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      ref={containerRef}
      className={`splash-screen splash-${phase}`}
      aria-hidden="true"
    >
      {/* 3D perspective container */}
      <div className="splash-3d-scene">
        {/* Orbiting rings */}
        <div className="splash-orbit splash-orbit-1">
          <div className="splash-orbit-ring" />
        </div>
        <div className="splash-orbit splash-orbit-2">
          <div className="splash-orbit-ring" />
        </div>
        <div className="splash-orbit splash-orbit-3">
          <div className="splash-orbit-ring" />
        </div>

        {/* Floating 3D geometric shapes */}
        <div className="splash-shape splash-cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>

        <div className="splash-shape splash-diamond">
          <div className="diamond-inner" />
        </div>

        <div className="splash-shape splash-octahedron">
          <div className="octa-inner" />
        </div>

        {/* Depth orbs — large glowing spheres at different Z depths */}
        <div className="splash-orb splash-orb-1" />
        <div className="splash-orb splash-orb-2" />
        <div className="splash-orb splash-orb-3" />
        <div className="splash-orb splash-orb-4" />
        <div className="splash-orb splash-orb-5" />

        {/* Star field particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="splash-star"
            style={{
              left: `${5 + (i * 47) % 90}%`,
              top: `${3 + (i * 31) % 94}%`,
              animationDelay: `${(i * 0.2) % 3}s`,
              animationDuration: `${2 + (i % 3)}s`,
              width: `${1.5 + (i % 3)}px`,
              height: `${1.5 + (i % 3)}px`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid background */}
      <div className="splash-grid" />

      {/* Radial ambient glow behind logo */}
      <div className="splash-ambient" />

      {/* Main logo */}
      <div className="splash-logo-wrapper">
        <img src={svLogo} alt="SV Logo" className="splash-logo-img" />
      </div>

      {/* Floating particles */}
      <div className="splash-particle splash-p1" />
      <div className="splash-particle splash-p2" />
      <div className="splash-particle splash-p3" />
      <div className="splash-particle splash-p4" />
    </div>
  );
};

export default SplashScreen;

