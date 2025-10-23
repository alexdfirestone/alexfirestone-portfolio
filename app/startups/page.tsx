import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StartupsHero } from "@/components/startups/startups-hero"
import { StartupsGrid } from "@/components/startups/startups-grid"

export default function StartupsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <StartupsHero />
      <StartupsGrid />
      <Footer />
    </main>
  )
}
