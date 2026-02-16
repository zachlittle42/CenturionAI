import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaBannerProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export default function CtaBanner({
  title = "Ready to close the AI gap?",
  subtitle = "Tell us where you are and we'll show you the fastest path forward.",
  buttonText = "Get Started",
  buttonHref = "/get-started",
}: CtaBannerProps) {
  return (
    <section className="grain py-20 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-800 z-0"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-900 rounded-full opacity-10 blur-3xl"></div>

      {/* Floating geometric decorations */}
      <div className="absolute top-12 left-[15%] w-4 h-4 rounded-sm bg-amber-500/20 animate-float" />
      <div className="absolute bottom-16 right-[10%] w-6 h-6 rounded-full bg-brand-400/15 animate-float stagger-3" />
      <div className="absolute top-1/2 right-[20%] w-3 h-3 rounded-sm bg-amber-400/20 animate-float stagger-5" />

      <div className="container relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-balance text-3xl md:text-4xl font-bold text-white mb-4 opacity-0 animate-reveal">
          {title}
        </h2>
        <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-1">
          {subtitle}
        </p>
        <div className="opacity-0 animate-reveal stagger-2">
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-amber-500 hover:bg-amber-600 text-gray-900 shadow-lg group"
          >
            <Link href={buttonHref} className="flex items-center">
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
