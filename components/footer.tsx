export function Footer() {
  return (
    <footer id="contact" className="border-t border-foreground mt-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact */}
          <div>
            <h3 className="text-mono-caps font-mono mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="mailto:alexdfirestone@gmail.com"
                className="block font-mono text-sm hover:text-accent transition-colors focus:outline-none focus:text-accent"
              >
                alexdfirestone@gmail.com
              </a>
              <a
                href="https://github.com/alexdfirestone"
                className="block font-mono text-sm hover:text-accent transition-colors focus:outline-none focus:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/alexfirestone"
                className="block font-mono text-sm hover:text-accent transition-colors focus:outline-none focus:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* About */}
          <div id="about">
            <h3 className="text-mono-caps font-mono mb-4">About</h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              Full-stack developer and AI engineer building performant web applications and SaaS with agentic workflows. 
              Specializing in React, TypeScript, and LLM engineering.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-mono-caps font-mono mb-4">Location</h3>
            <p className="font-mono text-sm">Palo Alto, CA</p>
            {/* <p className="font-mono text-sm text-muted-foreground mt-2">Available for remote work</p> */}
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-foreground/20">
          <p className="text-mono-caps font-mono text-center text-muted-foreground">© 2025 Alex Firestone</p>
        </div>
      </div>
    </footer>
  )
}
