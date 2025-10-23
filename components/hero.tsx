import { GeometricPattern } from "./geometric-pattern"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <GeometricPattern />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex items-start gap-6 md:gap-8 lg:gap-12">
          {/* Name text */}
          <div className="flex-1 space-y-2 md:space-y-4">
            <h1 className="text-display text-[clamp(2.5rem,15vw,14rem)] font-bold lowercase leading-none">alex</h1>
            <h1 className="text-display text-[clamp(2.5rem,15vw,14rem)] font-bold lowercase leading-none">firestone</h1>
          </div>

          {/* Profile picture - positioned on the right */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full overflow-hidden border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-105 cursor-pointer">
              <Image 
                src="/headshot.JPG" 
                alt="Alex Firestone"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 max-w-2xl">
          <p className="text-base md:text-xl font-mono leading-relaxed">
            Problem solver building <span className="text-accent font-bold">precise</span>,{" "}
            <span className="text-accent font-bold">functional</span> digital experiences.
          </p>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
    </section>
  )
}
