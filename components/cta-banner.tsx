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
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#1a1c19" }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/20 to-transparent" />

      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#bcf1ae]/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-balance text-3xl md:text-4xl font-bold text-white mb-4 opacity-0 animate-reveal">
          {title}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-1" style={{ color: "#c2c9bb" }}>
          {subtitle}
        </p>
        <div className="opacity-0 animate-reveal stagger-2">
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] shadow-lg shadow-[#bcf1ae]/10 group"
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
