const startups = [
  {
    name: "DevTools Pro",
    tagline: "Developer productivity suite",
    description:
      "A comprehensive toolkit for modern developers. Code snippets, API testing, and workflow automation in one place.",
    status: "Active",
    year: "2023",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    metrics: ["10K+ users", "50K+ snippets saved", "99.9% uptime"],
    link: "#",
  },
  {
    name: "DataViz Studio",
    tagline: "Interactive data visualization",
    description:
      "Transform complex datasets into beautiful, interactive visualizations. No-code interface with powerful customization.",
    status: "Active",
    year: "2022",
    tech: ["Next.js", "D3.js", "Python", "AWS"],
    metrics: ["5K+ dashboards", "1M+ charts created", "Enterprise clients"],
    link: "#",
  },
  {
    name: "CodeReview AI",
    tagline: "Automated code review assistant",
    description:
      "AI-powered code review that catches bugs, suggests improvements, and enforces best practices before merge.",
    status: "Beta",
    year: "2024",
    tech: ["TypeScript", "OpenAI", "GitHub API", "Vercel"],
    metrics: ["500+ repos", "10K+ PRs reviewed", "85% bug detection"],
    link: "#",
  },
  {
    name: "APIHub",
    tagline: "API marketplace and management",
    description:
      "Discover, test, and integrate APIs. Unified billing, monitoring, and documentation for all your API needs.",
    status: "Acquired",
    year: "2021",
    tech: ["Go", "GraphQL", "MongoDB", "Kubernetes"],
    metrics: ["1K+ APIs", "50K+ developers", "Acquired 2023"],
    link: "#",
  },
]

export function StartupsGrid() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12 pb-20">
      <div className="space-y-12">
        {startups.map((startup, index) => (
          <article key={index} className="keyline hover:keyline-thick transition-all">
            <div className="p-6 md:p-8 lg:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-2">{startup.name}</h2>
                  <p className="text-xl md:text-2xl text-accent">{startup.tagline}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-mono-caps font-mono px-3 py-1 keyline ${
                      startup.status === "Active"
                        ? "bg-accent text-background"
                        : startup.status === "Beta"
                          ? "bg-foreground text-background"
                          : ""
                    }`}
                  >
                    {startup.status}
                  </span>
                  <span className="text-mono-caps font-mono text-muted-foreground">{startup.year}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">{startup.description}</p>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-mono-caps font-mono text-muted-foreground mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {startup.tech.map((tech, i) => (
                    <span key={i} className="text-mono-caps font-mono px-3 py-1 keyline">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <p className="text-mono-caps font-mono text-muted-foreground mb-3">Key Metrics</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {startup.metrics.map((metric, i) => (
                    <div key={i} className="keyline p-4">
                      <p className="text-lg font-bold">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href={startup.link}
                className="inline-flex items-center gap-2 text-mono-caps font-mono px-4 py-2 keyline hover:keyline-thick hover:bg-accent hover:text-background transition-all"
              >
                View Project
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
