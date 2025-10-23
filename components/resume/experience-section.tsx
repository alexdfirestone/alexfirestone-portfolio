const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Tech Startup Inc.",
    period: "2022 - Present",
    description:
      "Led development of core platform features using React, Next.js, and Node.js. Architected scalable microservices handling 1M+ daily requests.",
    achievements: [
      "Reduced page load time by 60% through optimization",
      "Built real-time collaboration features",
      "Mentored team of 5 junior engineers",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description:
      "Developed custom web applications for enterprise clients. Specialized in React, TypeScript, and cloud infrastructure.",
    achievements: [
      "Delivered 15+ client projects on time",
      "Implemented CI/CD pipelines",
      "Improved test coverage to 85%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Creative Studio",
    period: "2018 - 2020",
    description:
      "Built responsive, accessible web interfaces. Collaborated with designers to create pixel-perfect implementations.",
    achievements: [
      "Developed component library used across 20+ projects",
      "Achieved 100% accessibility compliance",
      "Reduced bundle size by 40%",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <h2 className="text-display text-4xl md:text-5xl mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="keyline p-6 md:p-8 hover:keyline-thick transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.title}</h3>
                <p className="text-xl text-accent">{exp.company}</p>
              </div>
              <p className="text-mono-caps font-mono text-muted-foreground">{exp.period}</p>
            </div>
            <p className="text-lg leading-relaxed mb-4">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1">▸</span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
