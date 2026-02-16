import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-brand-50 rounded-full border border-brand-100">
          <span className="text-brand-700 font-medium text-sm">Fractional AI Leadership</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-brand-950">
          Stop paying for AI tools nobody uses.
        </h1>

        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          You bought the seats. Your team barely touches them. Centurion AI bridges the gap between
          having AI tools and actually getting value from them. We set up, train, build, and run AI
          systems so your team ships faster and works smarter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-100/50 group"
          >
            <Link href="/ai-transformation" className="flex items-center">
              Transform Your Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 font-medium border-brand-200 text-brand-700 hover:bg-brand-50"
          >
            <Link href="/ai-engineering" className="flex items-center">
              Build With Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
