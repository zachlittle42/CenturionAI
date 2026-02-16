import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Server,
  Shield,
  Terminal,
  Gauge,
  Lock,
  Wrench,
  Database,
  Mail,
  Phone,
  FileText,
  Brain,
  Layout,
  LineChart,
  Zap,
  Bot,
  MessagesSquare,
} from "lucide-react"

export const metadata = {
  title: "Use Cases | Centurion AI",
  description:
    "See what we build: OpenClaw AI agent infrastructure, AI-powered CRMs, cold email systems, voice agents, and more.",
}

export default function UseCasesPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO — OPENCLAW                                              */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "#0F172A" }} />
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-950 rounded-full opacity-20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-900/50 rounded-full border border-blue-700/50">
                <span className="text-blue-300 font-medium text-sm">
                  Powered by OpenClaw
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white font-display text-balance opacity-0 animate-reveal">
                AI agents that run your business.{" "}
                <span className="text-blue-400">24/7.</span>
              </h1>

              <p className="text-xl mb-10 max-w-3xl mx-auto md:mx-0 leading-relaxed opacity-0 animate-reveal stagger-1" style={{ color: "#94A3B8" }}>
                OpenClaw is our open-source AI agent platform. Self-hosted or cloud-managed,
                it gives your business always-on AI agents with full tool access, security sandboxing,
                and complete control over what they can do.
              </p>

              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 opacity-0 animate-reveal stagger-2">
                <Button
                  asChild
                  size="lg"
                  className="text-base px-8 py-6 font-medium bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 group"
                >
                  <Link href="/get-started" className="flex items-center">
                    Deploy OpenClaw
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6 font-medium border-blue-400/30 text-blue-300 hover:bg-white/5"
                >
                  <Link href="/ai-transformation" className="flex items-center">
                    See Infrastructure Pricing
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Agent Dashboard Mockup */}
            <div className="hidden md:block opacity-0 animate-reveal stagger-3">
              <div className="rounded-xl border border-blue-400/15 bg-[#0B1222] p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">OpenClaw Agent Manager</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: "Lead Qualifier", status: "Active", metric: "38 scored today", color: "bg-green-400" },
                    { name: "Support Agent — Tier 1", status: "Active", metric: "124 tickets/wk", color: "bg-green-400" },
                    { name: "Email Outreach — Q1", status: "Active", metric: "1.2k sent", color: "bg-green-400" },
                    { name: "Voice — Inbound Calls", status: "Active", metric: "67 calls today", color: "bg-green-400" },
                    { name: "Report Gen — Weekly", status: "Scheduled", metric: "Next: Mon 8am", color: "bg-yellow-400" },
                  ].map((agent) => (
                    <div key={agent.name} className="flex items-center justify-between rounded-lg bg-slate-800/50 border border-slate-700/40 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${agent.color}`} />
                        <span className="text-sm text-slate-300 font-mono">{agent.name}</span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">{agent.metric}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">5 agents deployed</span>
                  <span className="text-xs text-green-400 font-mono">All systems nominal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT IS OPENCLAW                                             */}
      {/* ============================================================ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display" style={{ color: "#0F172A" }}>
              What OpenClaw does.
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#64748B" }}>
              Think of it as a self-hosted AI workforce. Each agent has its own tools, permissions,
              and instructions — running continuously on your infrastructure or ours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Always-On Agents",
                desc: "AI agents that run 24/7 — monitoring, responding, processing, and executing tasks without human intervention. Set them up once, they run continuously.",
              },
              {
                icon: Shield,
                title: "Security Sandboxing",
                desc: "Every agent runs in an isolated environment with granular permissions. Control exactly which tools, APIs, and data each agent can access.",
              },
              {
                icon: Terminal,
                title: "Full Tool Access",
                desc: "Agents can execute code, call APIs, query databases, send emails, manage files, and interact with any service you connect. Real actions, not just chat.",
              },
              {
                icon: Lock,
                title: "Self-Hosted or Cloud",
                desc: "Deploy on your own infrastructure for maximum control, or let us host it in an isolated container. BYOK (bring your own API keys) supported.",
              },
              {
                icon: Gauge,
                title: "Monitoring & Reporting",
                desc: "Full visibility into what agents are doing, how much they cost, and what they produce. Usage dashboards, cost tracking, and audit trails.",
              },
              {
                icon: Wrench,
                title: "Custom Tool Integrations",
                desc: "Build custom MCP servers to connect agents to your internal systems. CRM, ERP, databases, Slack, email — anything with an API.",
              },
            ].map((item, index) => (
              <Card key={item.title} className="border-0 shadow-md hover:shadow-xl transition-shadow overflow-hidden card-hover">
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-blue-600 to-blue-800" : "from-blue-400 to-blue-600"}`} />
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Architecture Mockup */}
          <div className="mt-16">
            <div className="rounded-xl border border-blue-400/15 bg-[#0B1222] p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-slate-500 font-mono">OpenClaw Architecture</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-3 rounded-lg bg-slate-800/50 border border-slate-700/40 px-4 py-3 text-center">
                  <span className="text-xs text-blue-400 font-mono font-semibold uppercase tracking-wider">Your Infrastructure</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Agent Runtime", detail: "Docker / K8s" },
                  { label: "Tool Registry", detail: "MCP Servers" },
                  { label: "Security Layer", detail: "Sandboxed" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-blue-500/10 border border-blue-400/15 px-3 py-3 text-center">
                    <p className="text-sm text-white font-mono font-medium">{item.label}</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 my-3">
                <div className="h-px flex-1 bg-slate-700/50" />
                <span className="text-xs text-slate-600 font-mono">API / Webhooks</span>
                <div className="h-px flex-1 bg-slate-700/50" />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {["CRM", "Email", "Slack", "Custom APIs"].map((svc) => (
                  <div key={svc} className="rounded-lg bg-slate-800/30 border border-slate-700/30 px-3 py-2.5 text-center">
                    <span className="text-xs text-slate-400 font-mono">{svc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Self-hosted on your servers</span>
                <span className="text-xs text-blue-400 font-mono">BYOK supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OPENCLAW AGENT EXAMPLES                                      */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0F172A" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display text-white">
              Agents we deploy.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              These are real agent configurations we build and manage for clients using OpenClaw.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead Qualification Agent",
                description: "Monitors your CRM for new leads. Researches each company via web scraping and LinkedIn. Scores them based on your ICP criteria. Routes qualified leads to the right sales rep with a pre-drafted outreach email.",
                tools: ["CRM API", "Web scraping", "Email", "Slack notifications"],
                mockup: {
                  lines: [
                    { label: "New lead: Acme Corp", value: "Score: 87/100", status: "bg-green-400" },
                    { label: "New lead: Beta Inc", value: "Score: 42/100", status: "bg-yellow-400" },
                    { label: "Routed: Acme Corp → Sarah K.", value: "Email drafted", status: "bg-green-400" },
                  ],
                  footer: { left: "12 leads scored today", right: "3 qualified" },
                },
              },
              {
                title: "Customer Support Agent",
                description: "Ingests your knowledge base, product docs, and past tickets. Handles Tier 1 support via chat or email. Escalates complex issues to humans with full context summary. Learns from resolved tickets.",
                tools: ["Knowledge base", "Email", "Chat widget", "Ticketing system"],
                mockup: {
                  lines: [
                    { label: "Ticket #1042 — Password reset", value: "Auto-resolved", status: "bg-green-400" },
                    { label: "Ticket #1043 — Billing question", value: "Auto-resolved", status: "bg-green-400" },
                    { label: "Ticket #1044 — API integration", value: "Escalated", status: "bg-yellow-400" },
                  ],
                  footer: { left: "87% auto-resolved", right: "Avg 12s response" },
                },
              },
              {
                title: "Report Generation Agent",
                description: "Pulls data from your analytics, CRM, and financial systems every Monday morning. Generates a formatted weekly report with charts and key metrics. Sends to your exec team via email and Slack.",
                tools: ["Database queries", "Analytics APIs", "Email", "Slack"],
                mockup: {
                  lines: [
                    { label: "Weekly Revenue Report", value: "Sent Mon 8:01am", status: "bg-green-400" },
                    { label: "Pipeline Summary", value: "Sent Mon 8:02am", status: "bg-green-400" },
                    { label: "Support Metrics Brief", value: "Queued", status: "bg-yellow-400" },
                  ],
                  footer: { left: "3 reports configured", right: "Next run: Mon" },
                },
              },
              {
                title: "Code Review Agent",
                description: "Monitors your GitHub repos for new PRs. Reviews code for bugs, security issues, and style violations. Posts inline comments and an overall summary. Learns your team's patterns over time.",
                tools: ["GitHub API", "Code analysis", "Comment posting"],
                mockup: {
                  lines: [
                    { label: "PR #247 — Auth refactor", value: "2 issues found", status: "bg-yellow-400" },
                    { label: "PR #248 — Add API tests", value: "Approved", status: "bg-green-400" },
                    { label: "PR #249 — DB migration", value: "Reviewing...", status: "bg-blue-400" },
                  ],
                  footer: { left: "142 PRs reviewed", right: "Avg 3min review" },
                },
              },
              {
                title: "Onboarding Agent",
                description: "Triggers when a new client signs a contract. Creates project channels, sends welcome emails, generates onboarding docs, schedules kickoff meetings, and tracks completion of setup tasks.",
                tools: ["CRM", "Slack", "Calendar", "Email", "Doc generation"],
                mockup: {
                  lines: [
                    { label: "Client: Nova Labs — Channel created", value: "Done", status: "bg-green-400" },
                    { label: "Welcome email sent", value: "Done", status: "bg-green-400" },
                    { label: "Kickoff meeting — scheduling", value: "Pending", status: "bg-yellow-400" },
                  ],
                  footer: { left: "8 clients onboarded", right: "Avg 2hr setup" },
                },
              },
              {
                title: "Competitive Intel Agent",
                description: "Monitors competitor websites, social media, and job postings daily. Flags new product launches, pricing changes, or hiring patterns. Delivers a weekly competitive brief to your team.",
                tools: ["Web scraping", "RSS feeds", "Email", "Slack"],
                mockup: {
                  lines: [
                    { label: "Competitor A — New pricing page", value: "Flagged", status: "bg-yellow-400" },
                    { label: "Competitor B — 3 new job posts", value: "Logged", status: "bg-green-400" },
                    { label: "Weekly brief — generated", value: "Sent Fri", status: "bg-green-400" },
                  ],
                  footer: { left: "5 competitors tracked", right: "24 alerts/wk" },
                },
              },
            ].map((agent) => (
              <div
                key={agent.title}
                className="rounded-xl overflow-hidden border border-blue-400/10"
                style={{ backgroundColor: "#1E293B" }}
              >
                {/* Mini agent dashboard mockup */}
                <div className="bg-[#0B1222] px-5 pt-4 pb-4 border-b border-slate-700/40">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">{agent.title}</span>
                  </div>
                  <div className="space-y-1.5">
                    {agent.mockup.lines.map((line) => (
                      <div key={line.label} className="flex items-center justify-between rounded bg-slate-800/50 border border-slate-700/30 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${line.status}`} />
                          <span className="text-xs text-slate-400 font-mono">{line.label}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">{line.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/30 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-mono">{agent.mockup.footer.left}</span>
                    <span className="text-xs text-blue-400/70 font-mono">{agent.mockup.footer.right}</span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/15 flex items-center justify-center shrink-0">
                      <Bot className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{agent.title}</h3>
                    </div>
                  </div>
                  <p className="leading-relaxed mb-4 text-sm" style={{ color: "#94A3B8" }}>{agent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-block px-3 py-1 rounded-lg text-xs font-medium border bg-blue-500/10 text-blue-300 border-blue-400/15"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SMALL BUSINESS USE CASES                                     */}
      {/* ============================================================ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display" style={{ color: "#0F172A" }}>
              AI use cases for every department.
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#64748B" }}>
              Whether you need a full agent deployment or a simpler AI-powered tool,
              here are the systems we build and configure for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "AI-Powered CRM",
                description:
                  "No-code CRMs tailored to your business with AI-driven lead scoring, automated data entry, and smart follow-up scheduling. Capture leads, keep teams in sync, and scale workflows without writing code.",
                benefits: [
                  "Automated data entry and lead enrichment",
                  "AI-scored pipeline with priority routing",
                  "Centralized client communications",
                ],
                badges: ["Built on OpenClaw", "Self-hosted"],
                preview: { metric: "89 leads scored", status: "Active" },
              },
              {
                icon: Mail,
                title: "Cold Email Infrastructure",
                description:
                  "High-deliverability mailbox setup with AI-powered personalization and automated multi-step outreach sequences. Fill your sales pipeline with qualified leads on autopilot.",
                benefits: [
                  "Warm-up and deliverability optimization",
                  "AI-personalized email sequences",
                  "Continuous A/B testing and analytics",
                ],
                badges: ["Built on OpenClaw", "SMTP integration"],
                preview: { metric: "62% open rate", status: "Sending" },
              },
              {
                icon: FileText,
                title: "Automated Proposals & Onboarding",
                description:
                  "AI drafts professional proposals in minutes from your CRM data. Automated onboarding flows handle document collection, task assignment, and client setup without manual overhead.",
                benefits: [
                  "Proposals generated from CRM context",
                  "Automated onboarding task management",
                  "Consistent formatting and branding",
                ],
                badges: ["Built on OpenClaw", "CRM connected"],
                preview: { metric: "14 proposals/wk", status: "Active" },
              },
              {
                icon: Phone,
                title: "AI Voice Receptionist",
                description:
                  "Never miss a call again. AI voice agents answer calls, qualify leads, schedule appointments, and route inquiries — 24/7 including off-hours and weekends.",
                benefits: [
                  "24/7 call handling with natural voice",
                  "Lead qualification and appointment booking",
                  "Call summaries and CRM integration",
                ],
                badges: ["Built on OpenClaw", "Telephony API"],
                preview: { metric: "142 calls/day", status: "Active" },
              },
              {
                icon: MessagesSquare,
                title: "Internal Knowledge Bot",
                description:
                  "A GPT-powered assistant trained on your company docs, SOPs, and historical data. Your team gets instant answers to recurring questions instead of searching through Slack or Drive.",
                benefits: [
                  "Trained on your docs and data",
                  "Slack or web-based interface",
                  "Answers sourced with citations",
                ],
                badges: ["Built on OpenClaw", "RAG pipeline"],
                preview: { metric: "2.4k queries/wk", status: "Active" },
              },
              {
                icon: LineChart,
                title: "Modern Data Stack",
                description:
                  "For organizations ready to scale analytics. We implement data pipelines, governance, and real-time dashboards that feed AI models with clean, connected data.",
                benefits: [
                  "Unified data from all your systems",
                  "Real-time reporting dashboards",
                  "ML-ready data infrastructure",
                ],
                badges: ["Built on OpenClaw", "PostgreSQL"],
                preview: { metric: "5 pipelines", status: "Streaming" },
              },
            ].map((useCase, index) => (
              <Card key={useCase.title} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-white card-hover">
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-blue-500 to-blue-700" : "from-blue-400 to-blue-600"}`} />
                <CardContent className="p-6">
                  {/* Status bar */}
                  <div className="flex items-center justify-between mb-4 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${useCase.preview.status === "Active" || useCase.preview.status === "Sending" || useCase.preview.status === "Streaming" ? "bg-green-400" : "bg-yellow-400"}`} />
                      <span className="text-xs font-mono text-slate-500">{useCase.preview.status}</span>
                    </div>
                    <span className="text-xs font-mono text-blue-500 font-medium">{useCase.preview.metric}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <useCase.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#0F172A" }}>{useCase.title}</h3>
                  </div>
                  <p className="mb-5 leading-relaxed text-sm" style={{ color: "#64748B" }}>{useCase.description}</p>
                  <ul className="space-y-2 mb-4">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm" style={{ color: "#64748B" }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Platform badges */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                    {useCase.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "#1E293B" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Have a use case in mind?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "#94A3B8" }}>
            Tell us what you&apos;re trying to automate or build. We&apos;ll tell you exactly how we&apos;d approach it, what it would cost, and how fast we can ship it.
          </p>
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 group"
          >
            <Link href="/get-started" className="flex items-center">
              Describe Your Use Case
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
