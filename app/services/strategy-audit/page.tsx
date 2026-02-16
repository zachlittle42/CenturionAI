import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ClipboardCheck,
  LayoutGrid,
  Monitor,
  Route,
  TrendingUp,
  FileCode,
  Wrench,
  Users,
  Clock,
  Database,
  Zap,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategy Audit - Centurion AI",
  description:
    "A focused audit that maps your AI opportunities, estimates ROI, and gives you a concrete implementation plan.",
}

const deliverables = [
  {
    icon: ClipboardCheck,
    title: "AI Readiness Assessment",
    description:
      "Where you stand today - tools, team skills, data maturity, workflow complexity.",
  },
  {
    icon: LayoutGrid,
    title: "Opportunity Matrix",
    description:
      "Prioritized list of AI use cases ranked by impact, feasibility, and ROI potential.",
  },
  {
    icon: Monitor,
    title: "Platform Recommendation",
    description:
      "Which AI platform fits your stack, team size, and budget (Claude, ChatGPT, Gemini, Copilot).",
  },
  {
    icon: Route,
    title: "Implementation Roadmap",
    description:
      "Step-by-step plan with timelines, resource needs, and expected outcomes.",
  },
  {
    icon: TrendingUp,
    title: "ROI Projections",
    description:
      "Conservative, moderate, and optimistic estimates for each recommended initiative.",
  },
  {
    icon: FileCode,
    title: "Technical Appendix",
    description:
      "Architecture notes, integration requirements, and security considerations.",
  },
]

const pricingTiers = [
  {
    name: "30-Day Sprint",
    price: "$1,500",
    recommended: false,
    features: [
      "2 stakeholder interviews",
      "Tool and workflow assessment",
      "Written AI Readiness Report",
      "1-hour findings presentation",
    ],
    bestFor: "Small teams testing the waters",
  },
  {
    name: "60-Day Deep Dive",
    price: "$2,500",
    recommended: true,
    features: [
      "4-6 stakeholder interviews",
      "Employee survey on current AI usage",
      "Tool, workflow, and data assessment",
      "Full AI-Adoption Report with technical appendix",
      "2-hour findings + strategy session",
      "30-day follow-up check-in",
    ],
    bestFor: "Mid-size companies serious about adoption",
  },
  {
    name: "90-Day Enterprise Assessment",
    price: "$4,500",
    recommended: false,
    features: [
      "Comprehensive stakeholder interview program",
      "Department-by-department analysis",
      "Security and compliance review",
      "Full report + technical appendix + implementation timeline",
      "Executive presentation",
      "60-day implementation support",
    ],
    bestFor: "Large organizations with complex needs",
  },
]

const assessmentItems = [
  {
    icon: Wrench,
    title: "Current tooling",
    description: "What you're paying for vs. what's being used.",
  },
  {
    icon: Users,
    title: "Team readiness",
    description:
      "Who's AI-curious, who needs training, who's already advanced.",
  },
  {
    icon: Clock,
    title: "Workflow bottlenecks",
    description: "Where manual work is eating hours.",
  },
  {
    icon: Database,
    title: "Data maturity",
    description: "What's connected, what's siloed, what's missing.",
  },
  {
    icon: Zap,
    title: "Quick wins",
    description: "What can deliver ROI in the first 30 days.",
  },
  {
    icon: Shield,
    title: "Security & compliance",
    description: "What guardrails are needed.",
  },
]

export default function StrategyAuditPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white z-0 dot-grid" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-100 rounded-full opacity-30 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-amber-50 text-amber-700 border-amber-200 px-4 py-1.5 text-sm opacity-0 animate-reveal"
          >
            Entry-point engagement
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-display text-balance opacity-0 animate-reveal stagger-1">
            Know exactly where AI fits in your business.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 opacity-0 animate-reveal stagger-2">
            A focused audit that maps your AI opportunities, estimates ROI, and
            gives you a concrete implementation plan. Not a 200-slide deck - a
            clear answer.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-6 text-base opacity-0 animate-reveal stagger-3"
          >
            <Link href="/get-started">
              Book Your Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              What you get
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete picture of where AI fits, what it costs, and how to get
              there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <Card
                key={item.title}
                className="border-0 shadow-md card-hover bg-white"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${index % 2 === 0 ? "bg-brand-50" : "bg-amber-50"} flex items-center justify-center mb-4`}>
                    <item.icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Process / Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              The process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three options. Pick the depth that fits your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative border-0 bg-white overflow-hidden ${
                  tier.recommended
                    ? "ring-2 ring-brand-500 shadow-lg gradient-border"
                    : "shadow-md card-hover"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-amber-500 text-gray-900 text-center text-xs font-semibold py-1.5 uppercase tracking-wide">
                      Recommended
                    </div>
                  </div>
                )}
                <div
                  className={`h-1 bg-gradient-to-r from-brand-500 to-amber-500 ${
                    tier.recommended ? "hidden" : ""
                  }`}
                />
                <CardHeader
                  className={`text-center ${tier.recommended ? "pt-10" : "pt-6"}`}
                >
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {tier.name}
                  </CardTitle>
                  <div className="mt-3">
                    <span className="text-4xl font-bold text-brand-600">
                      {tier.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Best for:</span>{" "}
                      {tier.bestFor}
                    </p>
                  </div>
                  <Button
                    asChild
                    className={`w-full ${
                      tier.recommended
                        ? "bg-amber-500 hover:bg-amber-600 text-gray-900"
                        : "bg-white border border-brand-600 text-brand-600 hover:bg-brand-50"
                    }`}
                  >
                    <Link href="/get-started">Book Your Audit</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 max-w-xl mx-auto">
            Audit fees are credited toward any Tier 1 or Tier 2 engagement.
            Think of it as a risk-free first step.
          </p>
        </div>
      </section>

      {/* What We Assess */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              What we assess
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Six areas that determine your AI readiness and biggest
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentItems.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${index % 2 === 0 ? "bg-brand-50" : "bg-amber-50"} flex items-center justify-center shrink-0`}>
                  <item.icon className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-900 to-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 grain">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-800 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-700 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            The audit pays for itself. Usually in the first week.
          </h2>
          <p className="text-brand-200 text-lg mb-8 max-w-xl mx-auto">
            Stop guessing where AI fits. Get a clear answer and a concrete plan.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-6 text-base font-semibold"
          >
            <Link href="/get-started">
              Book Your Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
