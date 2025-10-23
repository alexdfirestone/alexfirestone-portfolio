export function GeometricPattern() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <pattern id="chevron" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 0 40 L 20 20 L 40 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0 8 L 8 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}
