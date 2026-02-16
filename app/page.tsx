import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Users,
  Code,
  Search,
  Layers,
  Workflow,
  Server,
  Layout,
  Wrench,
  Brain,
  Database,
  Mail,
  Phone,
  FileText,
  Zap,
} from "lucide-react"
import CtaBanner from "@/components/cta-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white z-0" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-200 rounded-full opacity-20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-brand-950">
            AI implementation for companies that want results, not slide decks.
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We set up AI platforms, train your team, automate your workflows, build your software, and host your agents.
            Three service lines. One partner. Real outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 font-medium bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-100/50 group"
            >
              <Link href="/get-started" className="flex items-center">
                Talk to Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 font-medium border-brand-200 text-brand-700 hover:bg-brand-50"
            >
              <Link href="/services/strategy-audit" className="flex items-center">
                Start with a $1,500 Audit
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/* THREE SERVICE LINES                                              */}
      {/* ================================================================ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
              What we do.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three ways to work with us, depending on where you are and what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Transformation */}
            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-1.5 bg-gradient-to-r from-brand-400 to-brand-600" />
              <CardContent className="p-8">
                <div className="rounded-lg bg-brand-50 p-3 w-fit mb-5">
                  <Users className="h-7 w-7 text-brand-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Transformation</h3>
                <p className="text-brand-600 font-medium mb-4">We make your team AI-powered.</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Platform setup, connector integrations, role-based prompt packs, team training,
                  custom workflows, and managed AI infrastructure.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500 mt-0.5 shrink-0">T1</div>
                    <div>
                      <span className="font-medium text-gray-900">AI Foundations</span>
                      <span className="text-gray-500 text-sm"> — Platform setup + training from $1,500</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500 mt-0.5 shrink-0">T2</div>
                    <div>
                      <span className="font-medium text-gray-900">Custom Workflows</span>
                      <span className="text-gray-500 text-sm"> — Claude Code + agent automation from $3,500</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500 mt-0.5 shrink-0">T3</div>
                    <div>
                      <span className="font-medium text-gray-900">Managed Infrastructure</span>
                      <span className="text-gray-500 text-sm"> — OpenClaw hosted agents from $3,500</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/ai-transformation"
                  className="inline-flex items-center font-medium text-brand-600 group"
                >
                  See all tiers and pricing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* AI Engineering */}
            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-1.5 bg-gradient-to-r from-brand-600 to-brand-800" />
              <CardContent className="p-8">
                <div className="rounded-lg bg-brand-50 p-3 w-fit mb-5">
                  <Code className="h-7 w-7 text-brand-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Engineering</h3>
                <p className="text-brand-600 font-medium mb-4">Our AI team builds for you.</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AI-augmented engineering teams that ship working software in biweekly sprints.
                  3x faster than traditional agencies. You own all the code.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Full-stack apps, internal tools, APIs",
                    "AI/ML features and data pipelines",
                    "Biweekly delivery with daily standups",
                    "Projects from $15k, sprints from $8k",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/ai-engineering"
                  className="inline-flex items-center font-medium text-brand-700 group"
                >
                  See capabilities and pricing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Strategy Audit */}
            <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-1.5 bg-gradient-to-r from-brand-500 to-brand-700" />
              <CardContent className="p-8">
                <div className="rounded-lg bg-brand-50 p-3 w-fit mb-5">
                  <Search className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategy Audit</h3>
                <p className="text-brand-600 font-medium mb-4">Know exactly where AI fits.</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A focused 30-60-90 day audit that maps your AI opportunities, estimates ROI,
                  and gives you a concrete implementation plan. Not a 200-slide deck.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "AI readiness assessment",
                    "Prioritized opportunity matrix",
                    "Platform recommendation",
                    "Starting at $1,500 (credited toward Tier 1)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services/strategy-audit"
                  className="inline-flex items-center font-medium text-brand-600 group"
                >
                  Learn about the audit
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS — QUICK PROCESS                                     */}
      {/* ================================================================ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
              How every engagement starts.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need transformation, engineering, or both — the first step is the same.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-brand-200" />

            {[
              { num: "01", title: "Call", desc: "30-minute conversation about your business, your tools, and what you're trying to accomplish." },
              { num: "02", title: "Scope", desc: "We come back within 48 hours with a specific proposal — what we'll do, what it costs, and what you'll get." },
              { num: "03", title: "Build", desc: "We start executing. Platform setup, workflow builds, or sprint development — depending on what you need." },
              { num: "04", title: "Ship", desc: "Real deliverables, documented and measured. Training, working software, or live agents — not a PowerPoint." },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-600 text-white font-bold text-lg mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT WE'VE BUILT — USE CASE PREVIEW                             */}
      {/* ================================================================ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
              Real things we build for real businesses.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI agents, internal tools, automation workflows — here are some of the use cases we deploy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "AI-Powered CRM", desc: "No-code CRMs with AI-driven lead scoring, automated follow-ups, and smart pipeline management." },
              { icon: Mail, title: "Cold Email Infrastructure", desc: "High-deliverability mailboxes with AI personalization and automated outreach sequences." },
              { icon: FileText, title: "Automated Proposals", desc: "AI-drafted proposals in minutes. Automated onboarding flows. Less paperwork, faster closes." },
              { icon: Phone, title: "AI Voice Agents", desc: "AI receptionists that capture every call, qualify leads, and route inquiries — even off-hours." },
              { icon: Brain, title: "Internal Knowledge Bots", desc: "GPT-powered knowledge bases that answer team questions instantly from your docs and data." },
              { icon: Layout, title: "Custom Dashboards", desc: "Real-time reporting dashboards that pull from your CRM, analytics, and operational data." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/use-cases"
              className="inline-flex items-center font-medium text-brand-600 group text-lg"
            >
              See all use cases and learn about OpenClaw
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY CENTURION (condensed)                                        */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-black z-0" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-700 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-800 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why companies choose us.
            </h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "We build, not just advise", desc: "No strategy-only engagements. Every dollar you spend produces a working system, a trained team, or shipped code." },
              { title: "Transparent pricing", desc: "Every tier, every package, every engagement model — listed on our site with real numbers. No 'contact us for pricing' games." },
              { title: "AI-native from day one", desc: "Our teams use Claude Code, Cursor, and custom AI agents daily. You get the speed benefit without the hiring risk." },
              { title: "Start small, scale fast", desc: "Begin with a $1,500 audit. Upgrade to platform setup. Add workflows. Scale to managed infrastructure. No lock-in at any step." },
              { title: "You own everything", desc: "Code, documentation, configurations, prompt libraries — it's all yours. We build for handoff, not dependency." },
              { title: "48-hour response time", desc: "First call to scoped proposal in 48 hours. Team staffed in a week. We move at startup speed for companies of any size." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-brand-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA                                                              */}
      {/* ================================================================ */}
      <CtaBanner
        title="Not sure where to start?"
        subtitle="Book a 30-minute call. We'll help you figure out whether you need transformation, engineering, or both — and what the first step looks like."
        buttonText="Get Started"
        buttonHref="/get-started"
      />
    </main>
  )
}
