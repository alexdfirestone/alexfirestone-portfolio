const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California",
    period: "2014 - 2018",
    details: "Focus on Software Engineering and Human-Computer Interaction",
  },
]

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "Certified Kubernetes Administrator",
]

export function EducationSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12 pb-20">
      <h2 className="text-display text-4xl md:text-5xl mb-12">Education</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="keyline p-6 md:p-8">
          <h3 className="text-mono-caps font-mono mb-6 text-muted-foreground">Degree</h3>
          {education.map((edu, index) => (
            <div key={index}>
              <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
              <p className="text-xl text-accent mb-2">{edu.school}</p>
              <p className="text-mono-caps font-mono text-muted-foreground mb-4">{edu.period}</p>
              <p className="leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
        <div className="keyline p-6 md:p-8">
          <h3 className="text-mono-caps font-mono mb-6 text-muted-foreground">Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent mt-1">▸</span>
                <span className="text-lg leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
