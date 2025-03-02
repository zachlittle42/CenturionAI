import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <header id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-brand-50 rounded-full border border-brand-100">
          <span className="text-brand-700 font-medium text-sm">AI Implementation Agency</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-brand-950">
          Centurion AI: Where Strategy Meets Real-World Impact
        </h1>

        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          We're a full-service AI consultancy and development team committed to driving tangible business results. At
          Centurion AI, we go beyond concepts—we implement systems, deliver measurable ROI, and pave a clear path to
          scalable growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-100/50 group"
          >
            <Link href="#contact" className="flex items-center">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 font-medium border-brand-200 text-brand-700 hover:bg-brand-50"
          >
            <Link href="#services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

