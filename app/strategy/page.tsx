import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Search,
  Map,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react"
import CtaBanner from "@/components/cta-banner"

export const metadata = {
  title: "Strategy | Verdant AI Partners",
  description:
    "Know exactly where AI fits in your business — and what each opportunity is worth. A focused 30-day assessment with ROI estimates and a concrete implementation plan.",
}

const deliverables = [
  {
    icon: Search,
    title: "AI Readiness Assessment",
    description:
      "We evaluate your current tools, workflows, team capabilities, and data infrastructure. Where are you today, and what's possible?",
  },
  {
    icon: Map,
    title: "Opportunity Mapping",
    description:
      "Every department, every workflow — we identify where AI saves time, cuts costs, or creates new capabilities. Prioritized by impact and effort.",
  },
  {
    icon: BarChart3,
    title: "ROI Estimates",
    description:
      "Not hand-wavy projections. Concrete estimates based on your actual team size, salaries, and workflows. You'll know exactly what each AI implementation is worth before you spend a dollar.",
  },
  {
    icon: FileText,
    title: "Implementation Plan",
    description:
      "A step-by-step playbook: which platforms, which workflows, what order, what timeline. Built around your chosen enterprise AI stack (Claude, ChatGPT, Gemini, Copilot, or mixed).",
  },
  {
    icon: Settings,
    title: "Platform Recommendation",
    description:
      "We don't sell software. We recommend what actually fits your team, your budget, and your existing tools.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Kickoff Call",
    timeline: "Day 1",
    description:
      "60-minute deep dive into your business, workflows, team structure, and goals. We learn how you actually work.",
  },
  {
    number: "02",
    title: "Assessment",
    timeline: "Days 2-20",
    description:
      "We audit your tools, observe workflows, interview key team members, and map every AI opportunity. You keep working — we do the digging.",
  },
  {
    number: "03",
    title: "Deliverable",
    timeline: "Days 21-30",
    description:
      "You receive a complete AI strategy document: opportunities ranked by ROI, platform recommendations, implementation timeline, and budget estimates. Plus a 60-minute walkthrough call.",
  },
]

export default function StrategyPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{ backgroundColor: "#121411" }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bcf1ae]/30 via-[#bcf1ae]/30 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#bcf1ae] rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3b6934] rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#0d0f0c]/50 rounded-full border border-[#1a2e1a]/50">
            <span className="text-[#a1d494] font-medium text-sm">Strategy</span>
          </div>

          <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            Know exactly where AI fits — and what each opportunity is worth.
          </h1>

          <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{ color: "#c2c9bb" }}>
            A focused 30-day assessment that maps every AI opportunity in your business,
            estimates ROI for each, and gives you a concrete implementation plan
            with your chosen enterprise AI stack.
          </p>

          <p className="text-lg mb-4 opacity-0 animate-reveal stagger-2" style={{ color: "#e3e3dd" }}>
            Not a 200-slide deck. A concrete plan with real ROI numbers.
          </p>

          <div className="mb-8 opacity-0 animate-reveal stagger-3">
            <p className="text-3xl font-bold text-[#bcf1ae] mb-1">$5,000</p>
            <p className="text-sm" style={{ color: "#c2c9bb" }}>
              One-time engagement &middot; Introductory rate — pricing increases after initial client cohort
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-reveal stagger-3">
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
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT YOU GET                                                 */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1a1c19" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#e3e3dd" }}>
              What you get.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c2c9bb" }}>
              A complete AI strategy tailored to your business — not a generic report.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#1a1c19] rounded-xl shadow-md overflow-hidden border border-[#42493e]/15 hover:shadow-lg hover:border-[#bcf1ae]/20 transition-all"
              >
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-[#bcf1ae] to-[#a1d494]" : "from-[#a1d494] to-[#bcf1ae]"}`} />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#292b27] flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-[#bcf1ae]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#e3e3dd" }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#c2c9bb" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#121411" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              How it works.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c2c9bb" }}>
              30 days. Three phases. Clear deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#bcf1ae]/30 via-[#bcf1ae]/30 to-[#bcf1ae]/30" />

            {processSteps.map((step, i) => (
              <div key={step.number} className={`text-center relative opacity-0 animate-reveal stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#bcf1ae] text-white font-display font-bold text-lg mb-5 relative z-10 shadow-lg shadow-[#bcf1ae]/10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">
                  {step.title}
                </h3>
                <span className="inline-block text-sm font-medium text-[#bcf1ae] mb-3">
                  {step.timeline}
                </span>
                <p className="leading-relaxed text-sm" style={{ color: "#c2c9bb" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            This is where every engagement starts.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-[#bcf1ae]/80">
            Whether you end up doing AI Transformation, AI Engineering, or
            building your own — the strategy gives you clarity. Most clients save
            the $5,000 in the first month of implementation just by knowing
            what NOT to buy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 font-medium bg-[#1a1c19] hover:bg-[#292b27] text-[#bcf1ae] shadow-lg group"
            >
              <Link href="/get-started" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
