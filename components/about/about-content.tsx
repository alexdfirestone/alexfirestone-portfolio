export function AboutContent() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Bio */}
        <div className="keyline p-8 md:p-12">
          <h2 className="text-mono-caps font-mono text-muted-foreground mb-6">Background</h2>
          <div className="space-y-4 text-lg leading-relaxed">
           <p>
               I'm a builder and problem solver based in Palo Alto who combines product strategy, engineering, and entrepreneurship to bring ideas to life. I care about creating products that feel inevitable once they exist: simple, useful, and grounded in real user needs.
             </p>
            <p>
              Over the past six years, I’ve founded startups, worked with early-stage teams, and helped larger companies launch new products. My work blends hands-on technical execution with strategic product thinking to move from concept to launch efficiently.
            </p>
            <p>
              I believe in learning fast, shipping early, and iterating based on real feedback. Every project is a chance to build something that matters, refine the craft, and push the line between what’s possible and what’s practical.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="keyline p-8 md:p-12 bg-accent text-background">
          <h2 className="text-mono-caps font-mono mb-6 opacity-80">Philosophy</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <strong>Ship fast, iterate faster.</strong> The best code is code that solves real problems for real
              users.
            </p>
            <p>
              <strong>Simplicity wins.</strong> Complex solutions are easy. Simple, elegant solutions take work.
            </p>
            <p>
              <strong>Build for humans.</strong> Technology should be accessible, intuitive, and delightful to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
