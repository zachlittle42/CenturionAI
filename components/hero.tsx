import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "#121411" }}></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bcf1ae] via-[#a1d494] to-[#3b6934]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#bcf1ae]/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#bcf1ae]/10 rounded-full opacity-20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-[#292b27] rounded-full border border-[#42493e]/15">
          <span className="text-[#bcf1ae] font-medium text-sm">Fractional AI Leadership</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
          Stop paying for AI tools nobody uses.
        </h1>

        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: "#c2c9bb" }}>
          You bought the seats. Your team barely touches them. Verdant AI Partners bridges the gap between
          having AI tools and actually getting value from them. We set up, train, build, and run AI
          systems so your team ships faster and works smarter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] shadow-lg shadow-[#bcf1ae]/10 group"
          >
            <Link href="/get-started" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 font-medium border-[#42493e] text-[#bcf1ae] hover:bg-[#292b27]"
          >
            <Link href="/get-started" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
