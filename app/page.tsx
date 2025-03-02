import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TwoColumnIntro from "@/components/two-column-intro"
import ConsultingOverview from "@/components/consulting-overview"
import Services from "@/components/services"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TwoColumnIntro />
      <ConsultingOverview />
      <Services />
      <ContactSection />
      <Footer />
    </main>
  )
}

