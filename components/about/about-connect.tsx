const links = [
  { label: "GitHub", url: "https://github.com", handle: "@alexfirestone" },
  { label: "Twitter", url: "https://twitter.com", handle: "@alexfirestone" },
  { label: "LinkedIn", url: "https://linkedin.com", handle: "alexfirestone" },
  { label: "Email", url: "mailto:alex@firestone.dev", handle: "alex@firestone.dev" },
]

export function AboutConnect() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12 pb-20">
      <h2 className="text-display text-4xl md:text-5xl mb-12">Connect</h2>
      <div className="keyline-thick p-8 md:p-12">
        <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
          Always open to interesting projects, collaborations, and conversations. Let's build something great together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="keyline p-4 hover:keyline-thick hover:bg-accent hover:text-background transition-all group"
            >
              <p className="text-mono-caps font-mono text-muted-foreground group-hover:opacity-80 mb-2">{link.label}</p>
              <p className="font-mono break-all">{link.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
