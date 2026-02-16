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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 z-0 grain" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-700 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-800 rounded-full opacity-20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-brand-800/50 rounded-full border border-brand-700/50">
            <span className="text-brand-300 font-medium text-sm">
              Powered by OpenClaw
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white font-display text-balance opacity-0 animate-reveal">
            AI agents that run your business.{" "}
            <span className="text-amber-400">24/7.</span>
          </h1>

          <p className="text-xl text-brand-100/80 mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-1">
            OpenClaw is our open-source AI agent platform. Self-hosted or cloud-managed,
            it gives your business always-on AI agents with full tool access, security sandboxing,
            and complete control over what they can do.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-reveal stagger-2">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 font-medium bg-amber-500 hover:bg-amber-600 text-gray-900 shadow-lg group"
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
              className="text-base px-8 py-6 font-medium border-brand-600 text-brand-200 hover:bg-brand-800/50"
            >
              <Link href="/ai-transformation" className="flex items-center">
                See Infrastructure Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT IS OPENCLAW                                             */}
      {/* ============================================================ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 font-display">
              What OpenClaw does.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-brand-600 to-brand-800" : "from-brand-500 to-amber-500"}`} />
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${index % 2 === 0 ? "bg-brand-50" : "bg-amber-50"} flex items-center justify-center mb-4`}>
                    <item.icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OPENCLAW AGENT EXAMPLES                                      */}
      {/* ============================================================ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 font-display">
              Agents we deploy.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are real agent configurations we build and manage for clients using OpenClaw.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead Qualification Agent",
                description: "Monitors your CRM for new leads. Researches each company via web scraping and LinkedIn. Scores them based on your ICP criteria. Routes qualified leads to the right sales rep with a pre-drafted outreach email.",
                tools: ["CRM API", "Web scraping", "Email", "Slack notifications"],
              },
              {
                title: "Customer Support Agent",
                description: "Ingests your knowledge base, product docs, and past tickets. Handles Tier 1 support via chat or email. Escalates complex issues to humans with full context summary. Learns from resolved tickets.",
                tools: ["Knowledge base", "Email", "Chat widget", "Ticketing system"],
              },
              {
                title: "Report Generation Agent",
                description: "Pulls data from your analytics, CRM, and financial systems every Monday morning. Generates a formatted weekly report with charts and key metrics. Sends to your exec team via email and Slack.",
                tools: ["Database queries", "Analytics APIs", "Email", "Slack"],
              },
              {
                title: "Code Review Agent",
                description: "Monitors your GitHub repos for new PRs. Reviews code for bugs, security issues, and style violations. Posts inline comments and an overall summary. Learns your team's patterns over time.",
                tools: ["GitHub API", "Code analysis", "Comment posting"],
              },
              {
                title: "Onboarding Agent",
                description: "Triggers when a new client signs a contract. Creates project channels, sends welcome emails, generates onboarding docs, schedules kickoff meetings, and tracks completion of setup tasks.",
                tools: ["CRM", "Slack", "Calendar", "Email", "Doc generation"],
              },
              {
                title: "Competitive Intel Agent",
                description: "Monitors competitor websites, social media, and job postings daily. Flags new product launches, pricing changes, or hiring patterns. Delivers a weekly competitive brief to your team.",
                tools: ["Web scraping", "RSS feeds", "Email", "Slack"],
              },
            ].map((agent, index) => {
              const botColors = ["bg-brand-600", "bg-amber-500", "bg-brand-700", "bg-brand-600", "bg-amber-500", "bg-brand-700"]
              return (
                <div
                  key={agent.title}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover-glow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${botColors[index]} flex items-center justify-center shrink-0`}>
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{agent.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{agent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((tool, toolIndex) => (
                      <span
                        key={tool}
                        className={`inline-block px-3 py-1 rounded-lg text-xs font-medium border ${
                          toolIndex % 2 === 1
                            ? "bg-amber-50 text-amber-800 border-amber-100"
                            : "bg-brand-50 text-brand-800 border-brand-100"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SMALL BUSINESS USE CASES                                     */}
      {/* ============================================================ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 font-display">
              AI use cases for every department.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
              },
            ].map((useCase, index) => (
              <Card key={useCase.title} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-white card-hover">
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-brand-500 to-brand-700" : "from-amber-400 to-amber-600"}`} />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${index % 2 === 0 ? "bg-brand-50" : "bg-amber-50"} flex items-center justify-center`}>
                      <useCase.icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check className={`h-4 w-4 ${benefitIndex % 2 === 0 ? "text-brand-500" : "text-amber-500"} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-800 z-0 grain" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-900 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Have a use case in mind?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re trying to automate or build. We&apos;ll tell you exactly how we&apos;d approach it, what it would cost, and how fast we can ship it.
          </p>
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-amber-500 hover:bg-amber-600 text-gray-900 shadow-lg group"
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
