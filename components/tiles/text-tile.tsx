interface TextTileProps {
  title: string
  description: string
  accent?: boolean
}

export function TextTile({ title, description, accent }: TextTileProps) {
  return (
    <div
      className="keyline p-6 md:p-8 bg-background hover:translate-y-[-2px] hover:keyline-thick transition-all group"
      role="article"
    >
      <h3 className={`text-mono-caps font-mono mb-3 md:mb-4 ${accent ? "text-accent" : ""}`}>{title}</h3>
      <p className="text-sm md:text-base leading-relaxed text-foreground/80">{description}</p>
    </div>
  )
}
