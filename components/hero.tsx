import { GeometricPattern } from "./geometric-pattern"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <GeometricPattern />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-display text-[clamp(2.5rem,15vw,14rem)] font-bold lowercase leading-none">alex</h1>
          <h1 className="text-display text-[clamp(2.5rem,15vw,14rem)] font-bold lowercase leading-none">firestone</h1>
        </div>

        <div className="mt-8 md:mt-12 max-w-2xl">
          <p className="text-base md:text-xl font-mono leading-relaxed">
            Developer & Designer building <span className="text-accent font-bold">precise</span>,{" "}
            <span className="text-accent font-bold">functional</span> digital experiences.
          </p>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
    </section>
  )
}
