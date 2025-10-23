"use client"

import { useState } from "react"

interface CodeTileProps {
  code: string
  language: string
}

export function CodeTile({ code, language }: CodeTileProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="keyline bg-secondary/30 hover:translate-y-[-2px] hover:keyline-thick transition-all group relative">
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-mono-caps font-mono text-muted-foreground">{language}</span>
          <button
            onClick={handleCopy}
            className="text-mono-caps font-mono text-xs hover:text-accent transition-colors focus:outline-none focus:text-accent"
            aria-label="Copy code"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
