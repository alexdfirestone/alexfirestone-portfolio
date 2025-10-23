export function AboutContent() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Bio */}
        <div className="keyline p-8 md:p-12">
          <h2 className="text-mono-caps font-mono text-muted-foreground mb-6">Background</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              I'm a full-stack developer based in San Francisco, specializing in building modern web applications that
              prioritize performance, accessibility, and user experience.
            </p>
            <p>
              With over 8 years of experience, I've worked with startups and enterprises to ship products that scale. My
              approach combines technical excellence with pragmatic problem-solving.
            </p>
            <p>
              I believe in writing clean, maintainable code and building systems that last. Every project is an
              opportunity to learn, iterate, and create something meaningful.
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
