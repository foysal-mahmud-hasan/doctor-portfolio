import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { PublicationsSection } from "@/components/publications-section"
import { AppointmentSection } from "@/components/appointment-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <PublicationsSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  )
}
