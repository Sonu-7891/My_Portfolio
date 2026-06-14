const ParticleCanvas = () => (
  <div className="bg-container">
    {/* 3D perspective container for persistent background */}
    <div className="splash-3d-scene main-bg-3d">
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
      {Array.from({ length: 30 }).map((_, i) => (
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

    {/* The interactive canvas on top of the 3D CSS bg */}
    <canvas id="bg-canvas" />
  </div>
);

export default ParticleCanvas;
