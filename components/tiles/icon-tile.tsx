interface IconTileProps {
  icon: "compass" | "wrench" | "target"
  label: string
}

export function IconTile({ icon, label }: IconTileProps) {
  return (
    <div className="keyline p-6 md:p-8 bg-background hover:translate-y-[-2px] hover:keyline-thick transition-all group flex flex-col items-center justify-center gap-4 md:gap-6">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full keyline flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
        {icon === "compass" && (
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <polygon points="16,10 12,12 10,16 14,14" fill="currentColor" strokeWidth={1.5} />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        )}
        {icon === "wrench" && (
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
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            />
          </svg>
        )}
        {icon === "target" && (
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <circle cx="12" cy="12" r="6" strokeWidth={2} />
            <circle cx="12" cy="12" r="2" strokeWidth={2} />
          </svg>
        )}
      </div>
      <span className="text-mono-caps font-mono">{label}</span>
    </div>
  )
}
