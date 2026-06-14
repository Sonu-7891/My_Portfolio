const CustomCursor = () => (
  <>
    {/* Small precision dot */}
    <div id="cursor-dot" />
    {/* Mirror lens — shows on hover over cards/buttons */}
    <div id="cursor-lens">
      <div id="cursor-lens-shine" />
      <div id="cursor-lens-crosshair" />
    </div>
    {/* Outer magnetic trailing ring */}
    <div id="cursor-ring" />
  </>
);

export default CustomCursor;
