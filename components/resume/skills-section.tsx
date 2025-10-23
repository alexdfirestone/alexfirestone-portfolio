const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue", "Tailwind CSS", "CSS/SCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
  {
    category: "Practices",
    skills: ["TDD", "Agile", "Code Review", "Documentation", "Accessibility"],
  },
]

export function SkillsSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <h2 className="text-display text-4xl md:text-5xl mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="keyline p-6 hover:bg-accent hover:text-background transition-all">
            <h3 className="text-mono-caps font-mono mb-4 opacity-60">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-lg">
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
