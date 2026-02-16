import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Layout,
  Wrench,
  Plug,
  Brain,
  Database,
  Smartphone,
  Check,
  X,
  Star,
  Code,
  Terminal,
} from "lucide-react"

export const metadata = {
  title: "AI Engineering | Centurion AI",
  description:
    "AI-augmented engineering teams that ship 3x faster. Full-stack apps, internal tools, API integrations, and more in biweekly sprints.",
}

const capabilities = [
  {
    icon: Layout,
    title: "Full-Stack Applications",
    description:
      "Web apps, dashboards, admin panels, customer portals. React, Next.js, Python, Node.js.",
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    description:
      "Automate your ops. Custom CRMs, reporting dashboards, workflow engines, Slack bots.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description:
      "Connect your systems. REST/GraphQL APIs, third-party integrations, data sync pipelines.",
  },
  {
    icon: Brain,
    title: "AI/ML Features",
    description:
      "Add intelligence to your product. RAG systems, chat interfaces, document processing, recommendation engines.",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Move data where it needs to go. ETL pipelines, real-time streaming, analytics infrastructure.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform apps with React Native. Consumer-facing or internal tools.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Scope",
    timeline: "1-2 days",
    description:
      "We review your requirements, ask the hard questions, and deliver a fixed-scope proposal with a story-point estimate within 24 hours.",
  },
  {
    step: "02",
    title: "Staff",
    timeline: "3-5 days",
    description:
      "We assemble a dedicated team: Technical Project Manager + 2-4 engineers matched to your stack and domain.",
  },
  {
    step: "03",
    title: "Sprint",
    timeline: "Biweekly",
    description:
      "Biweekly sprints with real deliverables. You set priorities. We ship. Daily standups available, Slack channel included.",
  },
  {
    step: "04",
    title: "Ship",
    timeline: "Continuous",
    description:
      "Production-ready code, documented, tested, deployed. You own everything we build.",
  },
]

const comparisonRows = [
  {
    label: "Speed",
    traditional: "3-6 month projects",
    centurion: "Biweekly sprint delivery",
  },
  {
    label: "Team",
    traditional: "Junior devs, high turnover",
    centurion: "Senior engineers + AI tooling",
  },
  {
    label: "Pricing",
    traditional: "Hourly billing, scope creep",
    centurion: "Fixed sprint pricing, outcome-based",
  },
  {
    label: "AI Usage",
    traditional: "Maybe Copilot",
    centurion: "Claude Code, Cursor, custom agents, MCP servers",
  },
  {
    label: "Communication",
    traditional: "Weekly status emails",
    centurion: "Daily standups, shared Slack channel",
  },
  {
    label: "Ownership",
    traditional: "Vendor lock-in",
    centurion: "You own all code, day one",
  },
]

const pricingTiers = [
  {
    name: "10 Hours / Week",
    price: "$6,000",
    priceLabel: "per month",
    popular: false,
    team: "10 hrs/week at $150/hr",
    timeline: "Month-to-month, cancel anytime",
    idealFor: "Steady progress on a focused backlog",
    features: [
      "Submit tickets, we build them",
      "Dedicated Slack channel",
      "Weekly progress updates",
      "You own all code, day one",
      "30-day bug fix warranty",
    ],
  },
  {
    name: "20 Hours / Week",
    price: "$12,000",
    priceLabel: "per month",
    popular: true,
    team: "20 hrs/week at $150/hr",
    timeline: "Month-to-month, cancel anytime",
    idealFor: "Continuous product development and feature velocity",
    features: [
      "Everything in 10 hrs/week",
      "Priority ticket queue",
      "Daily standups available",
      "Sprint planning & retrospectives",
      "Dedicated project manager",
    ],
  },
  {
    name: "40 Hours / Week",
    price: "$24,000",
    priceLabel: "per month",
    popular: false,
    team: "40 hrs/week at $150/hr",
    timeline: "Month-to-month, cancel anytime",
    idealFor: "Full-time embedded engineering capacity",
    features: [
      "Everything in 20 hrs/week",
      "Full-time dedicated team",
      "Weekly strategy call",
      "On-call support",
      "Dedicated Slack workspace",
    ],
  },
]

const techStack = [
  {
    category: "AI Tools",
    tools: ["Claude Code", "Cursor", "Custom MCP Servers", "OpenClaw Agents"],
  },
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tools: ["Python", "Node.js", "FastAPI", "Express"],
  },
  {
    category: "Data",
    tools: ["PostgreSQL", "Redis", "Snowflake", "BigQuery"],
  },
  {
    category: "Infrastructure",
    tools: ["AWS", "GCP", "Vercel", "Docker", "Kubernetes"],
  },
  {
    category: "Process",
    tools: ["Linear", "GitHub", "Slack", "Figma"],
  },
]

const faqItems = [
  {
    question: "How fast can you start?",
    answer:
      "We can have a scoped proposal within 48 hours and a team staffed within a week. For urgent projects, we've started sprints within 3 days of first contact.",
  },
  {
    question: "Do we own the code?",
    answer:
      "Yes, 100%. All code, documentation, and assets are yours from day one. We work in your GitHub repo.",
  },
  {
    question: "What if the project scope changes?",
    answer:
      "We re-scope at the start of each sprint. Story points get re-estimated, and you reprioritize. No change order bureaucracy.",
  },
  {
    question: "Can your team work in our repo/tools?",
    answer:
      "Absolutely. We adapt to your stack, your Git workflow, your CI/CD pipeline. We integrate, not impose.",
  },
  {
    question: "How is this cheaper than hiring?",
    answer:
      "A senior engineer costs $180-250k/year fully loaded, takes 2-3 months to hire, and another month to onboard. Our teams are productive within a week, and you only pay for active sprints.",
  },
  {
    question: "What happens after the project ends?",
    answer:
      "You have complete, documented code. We offer optional maintenance retainers if you want ongoing support. No lock-in.",
  },
]

export default function AIEngineeringPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-900/50 rounded-full border border-blue-700/50">
                <span className="text-blue-300 font-medium text-sm">
                  AI-Augmented Development
                </span>
              </div>

              <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
                Ship faster. Spend less.{" "}
                <span className="text-blue-400">Skip the hiring.</span>
              </h1>

              <p className="text-xl mb-8 max-w-xl leading-relaxed opacity-0 animate-reveal stagger-2" style={{ color: "#94A3B8" }}>
                Our AI-augmented engineering teams deliver working software in
                biweekly sprints. We use Claude Code, Cursor, and custom agent
                workflows to build at 3x the speed of traditional agencies.
              </p>

              <div className="mb-8 opacity-0 animate-reveal stagger-2">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">We build with</p>
                <div className="flex flex-wrap gap-2">
                  {["React / Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL", "Claude Code", "Cursor AI"].map((tech) => (
                    <span key={tech} className="text-sm font-medium bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-full border border-slate-600/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="text-base px-8 py-6 font-medium bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 group opacity-0 animate-reveal stagger-3"
              >
                <Link href="/get-started" className="flex items-center">
                  Scope Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Sprint board mockup */}
            <div className="hidden md:block opacity-0 animate-reveal stagger-3">
              <div className="rounded-xl border border-blue-400/10 bg-[#0B1222] p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">Sprint Board — Acme Corp</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">To Do</p>
                    <div className="space-y-2">
                      {["API v2 endpoints", "Mobile responsive"].map((t) => (
                        <div key={t} className="rounded bg-slate-800/80 border border-slate-700/50 p-2.5">
                          <p className="text-xs text-slate-300 font-mono">{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">In Progress</p>
                    <div className="space-y-2">
                      {["Auth system", "Dashboard UI", "Webhook integration"].map((t) => (
                        <div key={t} className="rounded bg-blue-500/10 border border-blue-400/20 p-2.5">
                          <p className="text-xs text-blue-200 font-mono">{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-2">Done</p>
                    <div className="space-y-2">
                      {["DB schema", "CI/CD pipeline", "User roles", "Stripe billing"].map((t) => (
                        <div key={t} className="rounded bg-green-500/10 border border-green-400/15 p-2.5">
                          <p className="text-xs text-green-300/70 font-mono">{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">Sprint 4 of 6</span>
                  <span className="text-xs text-blue-400 font-mono">$150/hr — 20 hrs/wk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
              What we build.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              From MVPs to production systems. If it involves code, we ship it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200/60 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-blue-600 to-blue-400" : "from-blue-400 to-blue-600"}`} />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <cap.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>
                    {cap.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#64748B" }}>
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Development Showcase */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#0B1222" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              How AI makes us 3x faster.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              Our engineers pair with AI agents on every task. Here is what that looks like in practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Terminal mockup: AI-assisted coding */}
            <div className="rounded-xl border border-blue-400/10 bg-[#0B1222] p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <Terminal className="ml-2 h-3.5 w-3.5 text-slate-500" />
                <span className="text-xs text-slate-500 font-mono">claude-code — acme-dashboard</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div>
                  <span className="text-blue-400">$</span>
                  <span className="text-slate-300 ml-2">claude &quot;Build the user dashboard with role-based access&quot;</span>
                </div>
                <div className="pl-4 space-y-1.5">
                  <p className="text-slate-500">Analyzing project structure...</p>
                  <p className="text-green-400">Created: app/dashboard/page.tsx</p>
                  <p className="text-green-400">Created: app/dashboard/components/role-guard.tsx</p>
                  <p className="text-green-400">Created: lib/permissions.ts</p>
                  <p className="text-green-400">Modified: middleware.ts</p>
                  <p className="text-slate-500">Running tests...</p>
                  <p className="text-green-400">All 12 tests passed</p>
                </div>
                <div className="pt-2 border-t border-slate-700/40">
                  <span className="text-blue-400">$</span>
                  <span className="text-slate-300 ml-2">git add -A && git commit -m &quot;feat: dashboard with RBAC&quot;</span>
                </div>
                <div className="pl-4">
                  <p className="text-slate-500">[feature/dashboard 4a2f1c8] feat: dashboard with RBAC</p>
                  <p className="text-slate-500">4 files changed, 287 insertions(+)</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/40">
                <span className="text-xs text-slate-500 font-mono">Feature completed in 45 min vs 4+ hours traditional</span>
              </div>
            </div>

            {/* Code diff mockup */}
            <div className="rounded-xl border border-blue-400/10 bg-[#0B1222] p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <Code className="ml-2 h-3.5 w-3.5 text-slate-500" />
                <span className="text-xs text-slate-500 font-mono">PR #47 — Add Stripe billing integration</span>
              </div>
              <div className="space-y-0.5 font-mono text-xs">
                <div className="bg-slate-800/50 rounded px-3 py-1.5 text-slate-500 mb-2">
                  lib/billing.ts
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"export async function createSubscription(customerId: string) {"}</span>
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"  const session = await stripe.checkout.sessions.create({"}</span>
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"    customer: customerId,"}</span>
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"    mode: 'subscription',"}</span>
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"    line_items: [{ price: priceId, quantity: 1 }],"}</span>
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"  });"}</span>
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"  return session;"}</span>
                </div>
                <div className="bg-green-500/5 border-l-2 border-green-400/40 px-3 py-1">
                  <span className="text-green-400">+</span>
                  <span className="text-green-300 ml-2">{"}"}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-green-400 font-mono">+287 lines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-xs text-red-400 font-mono">-12 lines</span>
                </div>
                <span className="text-xs text-slate-500 font-mono ml-auto">6 files changed</span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/40 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-green-400" />
                  <span className="text-xs text-green-400 font-mono">CI passed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-green-400" />
                  <span className="text-xs text-green-400 font-mono">Review approved</span>
                </div>
                <span className="text-xs text-blue-400 font-mono ml-auto">Ready to merge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              How we work.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              From first call to production. No mystery, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-400/30 via-blue-400/30 to-blue-400/30" />

            {processSteps.map((step, i) => (
              <div key={step.title} className={`text-center relative opacity-0 animate-reveal stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white font-display font-bold text-lg mb-5 relative z-10 shadow-lg shadow-blue-500/20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">
                  {step.title}
                </h3>
                <span className="inline-block text-sm font-medium text-blue-400 mb-3">
                  {step.timeline}
                </span>
                <p className="leading-relaxed text-sm" style={{ color: "#94A3B8" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us vs. Traditional Agencies */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#0B1222" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Why us vs. traditional agencies.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              AI tooling changes the math on outsourced engineering. Here is what
              that looks like.
            </p>
          </div>

          <div className="rounded-xl border border-blue-400/10 bg-[#0B1222] shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-700/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <span className="ml-2 text-xs text-slate-500 font-mono">Comparison Matrix</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700/40">
                  <th className="py-4 px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider w-1/5">
                    &nbsp;
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider w-2/5">
                    Traditional Agency
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-blue-400 uppercase tracking-wider w-2/5">
                    Centurion AI Engineering
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.label}
                    className={index < comparisonRows.length - 1 ? "border-b border-slate-700/20" : ""}
                  >
                    <td className="py-4 px-6 font-medium text-white text-sm">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-sm" style={{ color: "#94A3B8" }}>
                      <span className="flex items-start gap-2">
                        <X className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-white">
                      <span className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                        {row.centurion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Simple, transparent pricing.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              $150/hr. You submit tickets, we build them. Pick your weekly hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl p-8 flex flex-col border transition-all ${
                  tier.popular
                    ? "bg-blue-500/10 border-blue-400/30 shadow-2xl shadow-blue-500/10"
                    : "border-slate-700/40 hover:border-blue-400/20"
                }`}
                style={{ backgroundColor: tier.popular ? undefined : "#1E293B" }}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-blue-500/30">
                      <Star className="h-3 w-3 mr-1.5" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6 mt-2">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-blue-400">
                      {tier.price}
                    </span>
                    <span className="text-sm" style={{ color: "#94A3B8" }}>
                      /{tier.priceLabel}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm" style={{ color: "#94A3B8" }}>
                  <p>
                    <span className="font-medium text-white">Team:</span>{" "}
                    {tier.team}
                  </p>
                  <p>
                    <span className="font-medium text-white">
                      Timeline:
                    </span>{" "}
                    {tier.timeline}
                  </p>
                  <p>
                    <span className="font-medium text-white">
                      Ideal for:
                    </span>{" "}
                    {tier.idealFor}
                  </p>
                </div>

                <div className="border-t border-slate-700/40 pt-6 mb-8 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#94A3B8" }}
                      >
                        <Check className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={`w-full ${
                    tier.popular
                      ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20"
                      : "bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/30"
                  }`}
                >
                  <Link href="/get-started">Scope Your Project</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Stack */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#0B1222" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Our stack.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              Real tools we use daily. Not a logo wall — a working toolkit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-block px-3 py-1.5 rounded-full bg-slate-700/50 text-slate-300 text-sm font-medium border border-slate-600/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0F172A" }}>
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Frequently asked questions.
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-700/40"
              >
                <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline hover:text-blue-400 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-base" style={{ color: "#94A3B8" }}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#0B1222" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
            Have a project in mind? Let&#39;s scope it.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Tell us what you need built. We will respond within 24 hours with a
            tailored proposal.
          </p>
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 group"
          >
            <Link href="/get-started" className="flex items-center">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
