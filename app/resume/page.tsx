import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResumeHero } from "@/components/resume/resume-hero"
import { ExperienceSection } from "@/components/resume/experience-section"
import { SkillsSection } from "@/components/resume/skills-section"
import { EducationSection } from "@/components/resume/education-section"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ResumeHero />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </main>
  )
}
