import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { TileGrid } from "@/components/tile-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TileGrid />
      <Footer />
    </main>
  )
}
