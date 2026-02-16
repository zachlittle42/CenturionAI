import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Users,
  Code,
  Search,
  Brain,
  Database,
  Mail,
  Phone,
  FileText,
  Layout,
} from "lucide-react"
import CtaBanner from "@/components/cta-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            AI implementation for companies that want <span className="text-blue-400">results</span>
          </h1>

          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{color: "#94A3B8"}}>
            We set up AI platforms, train your team, automate your workflows, build your software, and host your agents.
            Three service lines. One partner. Real outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-reveal stagger-3">
            <Link href="/get-started" className="inline-flex items-center text-base px-8 py-3 font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md shadow-lg shadow-blue-500/20 transition-colors group cursor-pointer">
              Talk to Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services/strategy-audit" className="inline-flex items-center text-base px-8 py-3 font-medium border rounded-md transition-colors cursor-pointer" style={{borderColor: "rgba(96,165,250,0.3)", color: "#93C5FD"}}>
              Start with a $1,500 Audit
            </Link>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/* THREE SERVICE LINES                                              */}
      {/* ================================================================ */}
      <section className="py-20 px-4" style={{backgroundColor: "#F8FAFC"}}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              What we do.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#64748B"}}>
              Three ways to work with us, depending on where you are and what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategy Audit */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 hover:shadow-lg hover:border-blue-200 transition-all relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">Minimum Package</span>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="rounded-lg bg-blue-50 p-3 shrink-0">
                  <Search className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold" style={{color: "#0F172A"}}>Strategy Audit</h3>
              </div>
              <p className="text-blue-500 font-medium mb-4">Know exactly where AI fits.</p>
              <p className="mb-6 leading-relaxed" style={{color: "#64748B"}}>
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
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm" style={{color: "#64748B"}}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/strategy-audit"
                className="inline-flex items-center font-medium text-blue-500 group"
              >
                Learn about the audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* AI Transformation */}
            <div className="bg-blue-600 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-blue-500/20 relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-sm font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">Most Popular</span>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="rounded-lg bg-blue-500/30 p-3 shrink-0">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Transformation</h3>
              </div>
              <p className="text-blue-200 font-medium mb-4">We make your team AI-powered.</p>
              <p className="mb-6 leading-relaxed text-blue-100/80">
                Platform setup, connector integrations, role-based prompt packs, team training,
                custom workflows, and managed AI infrastructure.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="rounded bg-blue-500/30 text-white px-2 py-0.5 text-xs font-semibold mt-0.5 shrink-0">T1</div>
                  <div>
                    <span className="font-medium text-white">AI Foundations</span>
                    <span className="text-sm text-blue-200"> — Platform setup + training from $1,500</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded bg-blue-500/30 text-white px-2 py-0.5 text-xs font-semibold mt-0.5 shrink-0">T2</div>
                  <div>
                    <span className="font-medium text-white">Custom Workflows</span>
                    <span className="text-sm text-blue-200"> — Claude Code + agent automation from $3,500</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded bg-blue-500/30 text-white px-2 py-0.5 text-xs font-semibold mt-0.5 shrink-0">T3</div>
                  <div>
                    <span className="font-medium text-white">Managed Infrastructure</span>
                    <span className="text-sm text-blue-200"> — OpenClaw hosted agents from $3,500</span>
                  </div>
                </div>
              </div>

              <Link
                href="/ai-transformation"
                className="inline-flex items-center font-medium text-white hover:text-blue-200 group"
              >
                See all tiers and pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* AI Engineering */}
            <div className="rounded-2xl border p-8 transition-all hover:shadow-lg relative" style={{backgroundColor: "#1E293B", borderColor: "rgba(96,165,250,0.15)"}}>
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-400 text-slate-900 text-sm font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">Most Valuable</span>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="rounded-lg p-3 shrink-0" style={{backgroundColor: "#0F172A"}}>
                  <Code className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Engineering</h3>
              </div>
              <p className="text-blue-400 font-medium mb-4">Our AI team builds for you.</p>
              <p className="mb-6 leading-relaxed" style={{color: "#94A3B8"}}>
                Submit tickets, we build them. AI-augmented engineering teams at $150/hr.
                3x faster than traditional agencies. You own all the code.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Full-stack apps, internal tools, APIs",
                  "AI/ML features and data pipelines",
                  "Submit tickets, we work on them",
                  "10, 20, or 40 hrs/week from $6k/mo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm" style={{color: "#94A3B8"}}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/ai-engineering"
                className="inline-flex items-center font-medium text-blue-400 group"
              >
                See capabilities and pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS — QUICK PROCESS                                     */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              How every engagement starts.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#94A3B8"}}>
              Whether you need transformation, engineering, or both — the first step is the same.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-400/30 via-blue-400/30 to-blue-400/30" />

            {[
              { num: "01", title: "Call", desc: "30-minute conversation about your business, your tools, and what you're trying to accomplish." },
              { num: "02", title: "Scope", desc: "We come back within 48 hours with a specific proposal — what we'll do, what it costs, and what you'll get." },
              { num: "03", title: "Build", desc: "We start executing. Platform setup, workflow builds, or sprint development — depending on what you need." },
              { num: "04", title: "Ship", desc: "Real deliverables, documented and measured. Training, working software, or live agents — not a PowerPoint." },
            ].map((step, i) => (
              <div key={step.num} className={`text-center relative opacity-0 animate-reveal stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white font-display font-bold text-lg mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: "#94A3B8"}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT WE'VE BUILT — USE CASE PREVIEW                             */}
      {/* ================================================================ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              Real things we build for real businesses.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#64748B"}}>
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
                className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-bold mb-2" style={{color: "#0F172A"}}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: "#64748B"}}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/use-cases"
              className="inline-flex items-center font-medium text-blue-500 group text-lg"
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
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Why companies choose us.
            </h2>
            <div className="w-16 h-0.5 bg-blue-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "We build, not just advise", desc: "No strategy-only engagements. Every dollar you spend produces a working system, a trained team, or shipped code." },
              { title: "Transparent pricing", desc: "Every tier, every package, every engagement model — listed on our site with real numbers. No 'contact us for pricing' games." },
              { title: "AI-native from day one", desc: "Our teams use Claude Code, Cursor, and custom AI agents daily. You get the speed benefit without the hiring risk." },
              { title: "Start small, scale fast", desc: "Begin with a $1,500 audit. Upgrade to platform setup. Add workflows. Scale to managed infrastructure. No lock-in at any step." },
              { title: "You own everything", desc: "Code, documentation, configurations, prompt libraries — it's all yours. We build for handoff, not dependency." },
              { title: "48-hour response time", desc: "First call to scoped proposal in 48 hours. Team staffed in a week. We move at startup speed for companies of any size." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`rounded-lg p-6 border hover:border-blue-500/20 transition-colors opacity-0 animate-reveal stagger-${i + 1}`}
                style={{backgroundColor: "#1E293B", borderColor: "rgba(148,163,184,0.1)"}}
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: "#94A3B8"}}>{item.desc}</p>
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
