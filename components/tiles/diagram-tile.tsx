export function DiagramTile() {
  return (
    <div className="keyline p-6 md:p-8 bg-background hover:translate-y-[-2px] hover:keyline-thick transition-all group">
      <svg
        className="w-full h-full min-h-[180px] md:min-h-[200px]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Technical diagram"
      >
        {/* Nodes */}
        <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" />
        <circle cx="160" cy="40" r="15" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="2" className="fill-accent" />
        <circle cx="40" cy="160" r="15" stroke="currentColor" strokeWidth="2" />
        <circle cx="160" cy="160" r="15" stroke="currentColor" strokeWidth="2" />

        {/* Connections */}
        <line x1="52" y1="48" x2="88" y2="92" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="148" y1="48" x2="112" y2="92" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="92" y1="108" x2="52" y2="152" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="108" y1="108" x2="148" y2="152" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

        {/* Arcs */}
        <path d="M 40 55 Q 100 80 160 55" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M 40 145 Q 100 120 160 145" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  )
}
