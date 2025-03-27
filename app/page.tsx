import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ThemeSection from "@/components/sections/theme-section"
import ObjectivesSection from "@/components/sections/objectives-section"
import BenchmarksSection from "@/components/sections/benchmarks-section"
import TeamsSection from "@/components/sections/teams-section"
import EventsSection from "@/components/sections/events-section"
import RegistrationSection from "@/components/sections/registration-section"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <ObjectivesSection />
      <BenchmarksSection />
      <TeamsSection />
      <EventsSection />
      <RegistrationSection />
      <BackToTop />
    </main>
  )
}

