const CustomCursor = () => (
  <>
    {/* Canvas for particle trail — luminous balls that spread & fade */}
    <canvas id="cursor-particles" />

    {/* Small precision dot — snaps to mouse */}
    <div id="cursor-dot" />

    {/* Outer trailing ring */}
    <div id="cursor-ring" />
  </>
);

export default CustomCursor;
