export function ResumeHero() {
  return (
    <section className="pt-32 pb-16 max-w-[1600px] mx-auto px-6">
      <div className="keyline-thick p-12 md:p-16">
        <h1 className="text-display text-6xl md:text-8xl lg:text-9xl mb-8">Resume</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <p className="text-mono-caps font-mono mb-2 text-muted-foreground">Location</p>
            <p className="text-xl">San Francisco, CA</p>
          </div>
          <div>
            <p className="text-mono-caps font-mono mb-2 text-muted-foreground">Contact</p>
            <p className="text-xl">alex@firestone.dev</p>
          </div>
        </div>
      </div>
    </section>
  )
}
