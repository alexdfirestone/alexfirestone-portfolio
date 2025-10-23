const experiences = [
  {
    title: "Sales Engineer",
    company: "Vercel",
    companyUrl: "https://vercel.com",
    period: "October 2025 - Present",
    description:
      "Working with startups to help them build and scale their applications using Vercel's platform and development tools.",
    achievements: [
      "Supporting startup customers with technical solutions",
      "Helping teams optimize their development workflows",
    ],
  },
  {
    title: "Founder & CTO",
    company: "AdviserGPT.ai",
    companyUrl: "https://advisergpt.ai",
    period: "September 2024 - October 2025",
    description:
      "Founded and built an AI-native SaaS platform for investment managers, focusing on workflow automation",
    achievements: [
      "Led product development and engineering",
      "Built AI-native automation tools",
      "Established initial customer base",
    ],
  },
  {
    title: "Senior Forward Deployed Engineer",
    company: "Ridgeline Inc.",
    companyUrl: "https://ridgelineapps.com",
    period: "October 2021 - August 2024",
    description:
      "Led cross-functional teams to deliver deployment platforms and integration solutions for financial technology clients.",
    achievements: [
      "Built internal deployment platforms",
      "Led technical go-to-market initiatives",
      "Established developer program and partnerships",
    ],
  },
  {
    title: "Engineer",
    company: "Ridgeline Inc.",
    companyUrl: "https://ridgelineapps.com",
    period: "October 2020 - October 2021",
    description:
      "Developed automated testing frameworks for financial software applications and systems.",
    achievements: [
      "Built comprehensive test suites",
      "Implemented testing automation",
    ],
  },
  {
    title: "Founder",
    company: "Ugig Research Inc.",
    companyUrl: "https://ugig.app",
    period: "October 2018 - October 2020",
    description:
      "Founded a SaaS marketplace connecting research participants with university laboratories.",
    achievements: [
      "Built and scaled marketplace platform",
      "Grew user base across multiple universities",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <h2 className="text-display text-4xl md:text-5xl mb-12 font-mono">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="keyline p-6 md:p-8 hover:keyline-thick transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 font-mono">{exp.title}</h3>
                <a 
                  href={exp.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-accent hover:text-accent/80 transition-colors font-mono"
                >
                  {exp.company}
                </a>
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
