interface ConnectorLineProps {
  startX: string
  startY: string
  endX: string
  endY: string
}

export function ConnectorLine({ startX, startY, endX, endY }: ConnectorLineProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="8 8"
        opacity="0.2"
        className="animate-pulse"
      />
      <circle cx={startX} cy={startY} r="4" fill="currentColor" opacity="0.3" />
      <circle cx={endX} cy={endY} r="4" fill="currentColor" opacity="0.3" />
    </svg>
  )
}
