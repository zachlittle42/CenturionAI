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
  Check,
  Bot,
  Brain,
  Phone,
  Mail,
  Shield,
  Database,
  Server,
  Cloud,
  Terminal,
  Users,
} from "lucide-react"
import CtaBanner from "@/components/cta-banner"

export const metadata = {
  title: "OpenClaw AI Agents | Centurion AI",
  description:
    "Deploy AI agents that run your business workflows 24/7 — on your infrastructure, with your data, under your control. Self-hosted or cloud-managed.",
}

const useCases = [
  {
    icon: Brain,
    title: "Personal Assistant",
    description:
      "An always-on AI that manages your calendar, drafts emails, handles follow-ups, and keeps your day organized. Your own digital chief of staff.",
  },
  {
    icon: Users,
    title: "Executive Coach",
    description:
      "An AI trained on leadership frameworks, your company values, and your goals. Get real-time coaching, meeting prep, and strategic thinking support.",
  },
  {
    icon: Bot,
    title: "Business Automation Agent",
    description:
      "Automate repetitive workflows — lead qualification, report generation, data entry, invoice processing. Your agent handles the busywork.",
  },
  {
    icon: Phone,
    title: "Customer Service Agent",
    description:
      "AI that answers calls, responds to inquiries, routes tickets, and resolves issues 24/7. Trained on your knowledge base and tone of voice.",
  },
  {
    icon: Mail,
    title: "Outreach Agent",
    description:
      "Personalized cold email at scale. Your agent researches prospects, writes tailored messages, and follows up automatically.",
  },
  {
    icon: Database,
    title: "Knowledge Bot",
    description:
      "Instant answers from your docs, SOPs, and internal data. Your team stops searching and starts asking.",
  },
]

const features = [
  {
    icon: Shield,
    title: "Security Sandboxing",
    description: "Every tool call is sandboxed. Your agent can only access what you explicitly allow.",
  },
  {
    icon: Server,
    title: "Self-Hosted Option",
    description: "Run on your own infrastructure. Your data never leaves your environment.",
  },
  {
    icon: Cloud,
    title: "Cloud-Managed Option",
    description: "We host, monitor, and maintain your agent. You just use it.",
  },
  {
    icon: Terminal,
    title: "Full Tool Access",
    description: "Connect to any API, database, or service. Your agent works with your existing tools.",
  },
]

const faqs = [
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is an open-source AI agent platform. It lets you deploy always-on AI agents with full tool access, security sandboxing, and complete control — whether self-hosted or cloud-managed.",
  },
  {
    question: "What's the difference between self-hosted and cloud-managed?",
    answer:
      "Self-hosted means the agent runs on your infrastructure — you have full control and your data stays with you. Cloud-managed means we host, monitor, and maintain everything for you. Both options give you the same capabilities.",
  },
  {
    question: "Can I customize my agent's personality?",
    answer:
      "Absolutely. We configure your agent's personality, tone, knowledge base, and capabilities to match exactly what you need — whether that's a formal executive assistant or a casual team helper.",
  },
  {
    question: "What tools can the agent connect to?",
    answer:
      "Anything with an API. Email, calendar, CRM, Slack, databases, internal tools, web search, file systems — we build the integrations as part of setup.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Self-hosted deployments take 2-4 weeks. Cloud-managed can be up in 1-2 weeks. Timeline depends on the number of tool integrations and customization required.",
  },
  {
    question: "How do I interact with my agent?",
    answer:
      "Your agent works across the tools you already use — Telegram, Slack, WhatsApp, or a custom web interface. You talk to it in plain English. It can also run on a schedule, triggering actions automatically without any input from you.",
  },
]

export default function OpenClawAgentsPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-blue-400/50 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-900/50 rounded-full border border-blue-700/50">
                <span className="text-blue-300 font-medium text-sm">OpenClaw AI Agents</span>
              </div>

              <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
                Your own AI agent. Always on. Fully yours.
              </h1>

              <p className="text-xl mb-6 max-w-xl leading-relaxed opacity-0 animate-reveal stagger-2" style={{ color: "#94A3B8" }}>
                OpenClaw is an open-source AI agent platform. We deploy, configure, and manage it for your business — so you get enterprise-grade AI agents without the enterprise complexity. Your infrastructure. Your data. Your control.
              </p>

              <div className="mb-8 opacity-0 animate-reveal stagger-2">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Built on open-source</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {["OpenClaw Platform", "Self-Hosted", "Cloud-Managed", "Full Tool Access"].map((tag) => (
                    <span key={tag} className="text-sm font-medium bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-full border border-slate-600/30">
                      {tag}
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
                  Deploy Your Agent
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Agent dashboard mockup */}
            <div className="hidden md:block opacity-0 animate-reveal stagger-3">
              <div className="rounded-xl border border-blue-400/15 bg-[#0B1222] p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">OpenClaw Dashboard</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: "Voice Agent — Inbound", status: "Active", metric: "142 calls today", color: "bg-green-400" },
                    { name: "Email Outreach — Q1 Campaign", status: "Active", metric: "847 sent", color: "bg-green-400" },
                    { name: "Knowledge Base — Internal Docs", status: "Active", metric: "2.4k queries/wk", color: "bg-green-400" },
                    { name: "Executive Coach — CEO", status: "Active", metric: "38 sessions/wk", color: "bg-green-400" },
                    { name: "CRM Agent — Lead Scoring", status: "Processing", metric: "89 new leads", color: "bg-yellow-400" },
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
      {/* USE CASES                                                    */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
              What your agent can do.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              From personal assistant to business automation — deploy the agent that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200/60 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-blue-600 to-blue-400" : "from-blue-400 to-blue-600"}`} />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#64748B" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PLATFORM FEATURES                                            */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Built for control and security.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              OpenClaw gives you the capabilities of enterprise AI agents without giving up control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`rounded-lg p-6 border hover:border-blue-500/20 transition-colors opacity-0 animate-reveal stagger-${i + 1}`}
                style={{ backgroundColor: "#1E293B", borderColor: "rgba(148,163,184,0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING                                                      */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#0B1222" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Deployment options.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Self-Hosted */}
            <div className="rounded-xl p-8 flex flex-col border border-slate-700/40 hover:border-blue-400/20 transition-all" style={{ backgroundColor: "#1E293B" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center">
                  <Server className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Self-Hosted</h3>
              </div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "#94A3B8" }}>
                Deploy on your infrastructure. Full control, full privacy.
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-400">From $3,000</span>
                <span className="text-sm ml-1" style={{ color: "#94A3B8" }}>setup</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Full OpenClaw platform deployment",
                  "Your infrastructure, your data",
                  "Security hardening and sandboxing",
                  "Custom agent personality and capabilities",
                  "Monitoring and usage reporting",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                    <Check className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/30">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>

            {/* Cloud-Managed */}
            <div className="relative rounded-xl p-8 flex flex-col bg-blue-500/10 border border-blue-400/30 shadow-2xl shadow-blue-500/10 transition-all">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-blue-500/30">
                  RECOMMENDED
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center">
                  <Cloud className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Cloud-Managed</h3>
              </div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "#94A3B8" }}>
                We host, monitor, and maintain everything. You just use it.
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-400">From $6,000</span>
                <span className="text-sm ml-1" style={{ color: "#94A3B8" }}>setup</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Self-Hosted",
                  "We host and manage your agent",
                  "99.9% uptime SLA",
                  "Automatic updates and patches",
                  "Dedicated support channel",
                  "Cost tracking and optimization",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                    <Check className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20">
                <Link href="/get-started">Deploy Your Agent</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0F172A" }}>
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Frequently asked questions.
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-slate-700/40"
              >
                <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline hover:text-blue-400 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-base" style={{ color: "#94A3B8" }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <CtaBanner
        title="Ready to deploy your AI agent?"
        subtitle="Tell us what you need your agent to do. We'll scope the deployment and have you up and running in weeks."
        buttonText="Get Started"
        buttonHref="/get-started"
      />
    </main>
  )
}
