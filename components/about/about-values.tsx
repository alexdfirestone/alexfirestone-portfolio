const values = [
  {
    title: "Craft",
    description: "Attention to detail in every line of code. Quality over quantity, always.",
  },
  {
    title: "Collaboration",
    description: "Great products are built by great teams. Communication and empathy matter.",
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves. Stay curious, experiment, and never stop growing.",
  },
  {
    title: "Impact",
    description: "Build things that matter. Solve problems that improve people's lives.",
  },
  {
    title: "Transparency",
    description: "Clear communication, honest feedback, and open-source contributions.",
  },
  {
    title: "Performance",
    description: "Fast, efficient, optimized. Users shouldn't wait for poorly written code.",
  },
]

export function AboutValues() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <h2 className="text-display text-4xl md:text-5xl mb-12">Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="keyline p-6 hover:keyline-thick transition-all">
            <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
