const values = [
  {
    title: "Execution",
    description: "Ideas are easy. The real work is shipping, learning, and iterating until it works in the real world.",
  },
  {
    title: "Clarity",
    description: "Great products come from clear thinking and communication. Simplicity creates momentum.",
  },
  {
    title: "Curiosity",
    description: "Stay close to new technology, ask better questions, and keep exploring how things fit together.",
  },
  {
    title: "Craft",
    description: "Clean systems, thoughtful design, and attention to detail at every layer of the stack.",
  },
  {
    title: "Integrity",
    description: "Operate with honesty and respect for others’ work. Build trust through transparency and follow-through.",
  },
  {
    title: "Impact",
    description: "Focus on building tools and experiences that make people’s work and lives meaningfully better.",
  },
]

export function AboutValues() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <h2 className="text-display text-4xl md:text-5xl mb-12 font-mono">Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="keyline p-6 hover:keyline-thick transition-all">
            <h3 className="text-2xl font-bold mb-3 font-mono">{value.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
