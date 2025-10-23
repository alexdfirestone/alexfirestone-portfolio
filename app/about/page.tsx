import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutContent } from "@/components/about/about-content"
import { AboutValues } from "@/components/about/about-values"
import { AboutConnect } from "@/components/about/about-connect"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <AboutValues />
      <AboutConnect />
      <Footer />
    </main>
  )
}
