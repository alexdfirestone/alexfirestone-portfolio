export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-mono-caps font-mono hover:text-accent transition-colors">
          af
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="/resume"
            className="text-mono-caps font-mono hover:text-accent transition-colors focus:outline-none focus:text-accent"
          >
            Resume
          </a>
          <a
            href="/startups"
            className="text-mono-caps font-mono hover:text-accent transition-colors focus:outline-none focus:text-accent"
          >
            Startups
          </a>
          <a
            href="/about"
            className="text-mono-caps font-mono hover:text-accent transition-colors focus:outline-none focus:text-accent"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-mono-caps font-mono px-3 md:px-4 py-2 keyline hover:keyline-thick hover:bg-accent hover:text-background transition-all focus:outline-none focus:keyline-thick focus:bg-accent focus:text-background"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
