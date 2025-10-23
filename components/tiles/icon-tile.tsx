interface IconTileProps {
  icon: "terminal" | "layers" | "rocket"
  label: string
}

export function IconTile({ icon, label }: IconTileProps) {
  return (
    <div className="keyline p-6 md:p-8 bg-background hover:translate-y-[-2px] hover:keyline-thick transition-all group flex flex-col items-center justify-center gap-4 md:gap-6">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full keyline flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
        {icon === "terminal" && (
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
        {icon === "layers" && (
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        )}
        {icon === "rocket" && (
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </div>
      <span className="text-mono-caps font-mono">{label}</span>
    </div>
  )
}
