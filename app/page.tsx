import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import SolutionsSection from "@/components/solutions-section"
import TechnologySection from "@/components/technology-section"
import TrendsSection from "@/components/trends-section"
import RoadmapSection from "@/components/roadmap-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrendsSection />
      <SolutionsSection />
      <TechnologySection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
