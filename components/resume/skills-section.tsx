const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "Python", "Postgres"],
  },
  {
    category: "Web & Frameworks",
    skills: ["React (JS/TS)", "Next.js", "Flask", "FastAPI", "Streamlit"],
  },
  {
    category: "AI / LLM Engineering",
    skills: ["RAG & Agentic Workflows", "LLM Optimization", "LangChain", "DSpy", "Vercel AI SDK"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Vercel", "AWS", "Docker", "Git", "CI/CD"],
  },
]

export function SkillsSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <h2 className="text-display text-4xl md:text-5xl mb-12 font-mono">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="keyline p-6 hover:bg-accent hover:text-background transition-all">
            <h3 className="text-mono-caps font-mono mb-4 opacity-60">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-lg font-mono">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
