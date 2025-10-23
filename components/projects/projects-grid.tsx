const projects = [
  {
    name: "AdviserGPT.ai",
    tagline: "Applied AI for investment managers",
    description:
      "AI-driven SaaS platform for investment managers, focusing on workflow automation using LLMs.",
    status: "Active",
    year: "2024",
    tech: ["Next.js", "React", "TypeScript", "Vercel", "Supabase"],
    metrics: ["AI-powered automation", "Initial customer base", "Product development"],
    link: "https://advisergpt.ai",
  },
  {
    name: "Ugig Research Inc.",
    tagline: "Research marketplace platform",
    description:
      "Marketplace connecting research participants with university laboratories.",
    status: "Inactive",
    year: "2018",
    tech: ["Django", "AWS"],
    metrics: ["Multi-university user base", "10,000+ users", "100s of Research Studies"],
    link: "https://ugig.app",
  },
]

export function ProjectsGrid() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12 pb-20">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <article key={index} className="keyline hover:keyline-thick transition-all">
            <div className="p-6 md:p-8 lg:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-2 font-mono">{project.name}</h2>
                  <p className="text-xl md:text-2xl text-accent font-mono">{project.tagline}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-mono-caps font-mono px-3 py-1 keyline ${
                      project.status === "Active"
                        ? "bg-accent text-background"
                        : project.status === "Beta"
                          ? "bg-foreground text-background"
                          : ""
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-mono-caps font-mono text-muted-foreground">{project.year}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">{project.description}</p>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-mono-caps font-mono text-muted-foreground mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
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
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="keyline p-4">
                      <p className="text-lg font-bold font-mono">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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
