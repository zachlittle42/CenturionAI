import Hero from "@/components/hero"
import ProblemSection from "@/components/problem-section"
import TwoPaths from "@/components/two-paths"
import SocialProof from "@/components/social-proof"
import CtaBanner from "@/components/cta-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <TwoPaths />
      <SocialProof />
      <CtaBanner />
    </main>
  )
}
