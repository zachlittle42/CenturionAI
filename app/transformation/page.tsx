import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Check,
  XCircle,
  Layers,
  Workflow,
  Server,
  ClipboardCheck,
  Settings,
  GraduationCap,
  Users,
  Zap,
  MessageSquare,
  FileText,
  BarChart3,
} from "lucide-react"

export const metadata = {
  title: "Transformation | Verdant AI Partners",
  description:
    "Go from AI-curious to AI-native. Platform setup, custom workflows, and managed AI infrastructure for your team.",
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const platforms = [
  { name: "Claude Team", cost: "$25-30/mo", minSeats: "5", bestFor: "Best reasoning, projects, coding teams" },
  { name: "Claude Enterprise", cost: "~$60/mo", minSeats: "~70", bestFor: "Large orgs, SSO, compliance, audit logs" },
  { name: "ChatGPT Enterprise", cost: "$60/mo", minSeats: "150", bestFor: "Large orgs in OpenAI ecosystem" },
  { name: "ChatGPT Team", cost: "$25-30/mo", minSeats: "2", bestFor: "Small teams, broad general use" },
  { name: "Google Gemini Business", cost: "$21/mo", minSeats: "1", bestFor: "Google Workspace shops" },
  { name: "Google Gemini Enterprise", cost: "$30/mo", minSeats: "1", bestFor: "Deeper Google integration" },
  { name: "Microsoft Copilot", cost: "$21-30/mo", minSeats: "1", bestFor: "Microsoft 365 shops" },
]

const tiers = [
  {
    icon: Layers,
    label: "Tier 1",
    name: "Enterprise AI Implementation",
    tagline: "AI connected to your tools, in your environment, for your users.",
    description:
      "Platform setup (Claude, ChatGPT, Gemini, Copilot), connector integrations to your existing tools, role-based custom prompt packs, and hands-on team training.",
    features: [
      "Platform selection, setup, and rollout",
      "Connector integrations (Gmail, Slack, Drive, CRM, and more)",
      "Role-based prompt packs for every department",
      "Live training sessions with recorded library",
      "Ongoing support and quarterly optimization",
    ],
    price: "From $3,000-$5,000 setup",
    priceNote: "Scales with team size",
    cta: "Get Started",
    featured: false,
  },
  {
    icon: Workflow,
    label: "Tier 2",
    name: "Enterprise AI Custom Workflows",
    tagline: "Automated workflows that actually run your processes.",
    description:
      "Claude Code or Codex deployment with custom MCP servers, API integrations, slash commands, multi-agent workflows, and guidance on setting up n8n flows and other automated business processes.",
    features: [
      "Claude Code / Codex setup on your machines",
      "Custom slash commands and skills for your workflows",
      "MCP server and API integrations",
      "Multi-agent workflow orchestration",
      "n8n and automation platform guidance",
    ],
    price: "From $5,000-$10,000",
    priceNote: null,
    cta: "Get Started",
    featured: true,
  },
  {
    icon: Server,
    label: "Tier 3",
    name: "Managed AI Agent Infrastructure",
    tagline: "Your own AI agent — personal assistant, executive coach, or Jarvis.",
    description:
      "Self-hosted or managed deployment of OpenClaw, our open-source AI agent platform. Launch always-on AI agents with full tool access, security sandboxing, and complete control. Whether you want a personal assistant, executive coach, companion, or your own Jarvis — we help you bring it to life.",
    features: [
      "Full OpenClaw platform deployment (self-hosted or cloud)",
      "Security hardening and tool sandboxing",
      "Custom agent personality and capabilities",
      "Monitoring, usage reporting, and cost tracking",
      "Self-hosted from $3,500 or cloud-managed from $6,000",
    ],
    price: "From $3,000 setup",
    priceNote: null,
    cta: "Get Started",
    featured: false,
  },
]

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We assess your current tools, workflows, and team readiness. 30-day engagement.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Implement",
    description:
      "We set up platforms, connect tools, build workflows, and deploy infrastructure.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Train & Support",
    description:
      "We train your team, document everything, and provide ongoing optimization.",
    icon: GraduationCap,
  },
]

const faqs = [
  {
    question: "We already have ChatGPT/Claude seats. Why do we need you?",
    answer:
      "Having seats is step zero. We configure them for your specific workflows, connect them to your data, train your team to use them effectively, and measure whether it's actually working.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Tier 1 (Implementation) takes 2-4 weeks. Tier 2 (Workflows) takes 4-8 weeks. Tier 3 (Agent Deployment) takes 2-6 weeks depending on complexity.",
  },
  {
    question: "Can we start small and upgrade later?",
    answer:
      "Absolutely. Most clients start with a Strategy Audit or Tier 1, then upgrade as they see results. Each tier builds on the previous one.",
  },
  {
    question: "What if our team doesn't adopt it?",
    answer:
      "That's exactly what our training and prompt packs solve. We don't just set up tools - we make them easy to use for specific roles. We also track adoption and adjust.",
  },
  {
    question: "Do you work with our existing IT team?",
    answer:
      "Yes. We integrate with your IT and security policies. For Tier 3, we work directly with your infrastructure team on deployment.",
  },
]

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function TransformationPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{backgroundColor: "#121411"}}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bcf1ae]/30 via-[#bcf1ae]/30 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#bcf1ae] rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3b6934] rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 bg-[#0d0f0c]/50 rounded-full border border-[#1a2e1a]/50">
                <span className="text-[#a1d494] font-medium text-sm">
                  Transformation
                </span>
              </div>

              <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
                Go from AI-curious to AI-native in 2 weeks.
              </h1>

              <p className="text-xl mb-6 max-w-xl leading-relaxed opacity-0 animate-reveal stagger-2" style={{color: "#c2c9bb"}}>
                Most companies buy AI seats and hope for the best. We set up the
                platforms, connect your tools, train your team, and build the
                workflows that make AI actually useful.
              </p>

              <div className="mb-8 opacity-0 animate-reveal stagger-3">
                <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{color: "rgba(188,241,174,0.5)"}}>We set up & train your team on</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {["Anthropic Claude", "OpenAI ChatGPT", "Google Gemini", "Microsoft Copilot", "Cursor"].map((platform) => (
                    <span key={platform} className="text-sm font-medium bg-[#1a1c19]/10 text-white px-3 py-1.5 rounded-full border border-white/10">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="text-base px-8 py-6 font-medium bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] shadow-lg shadow-[#bcf1ae]/10 group opacity-0 animate-reveal stagger-3"
              >
                <Link href="/get-started" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Right: Platform Setup Progress mockup */}
            <div className="hidden md:block opacity-0 animate-reveal stagger-3">
              <div className="rounded-xl border border-white/10 bg-[#1a1c19]/5 backdrop-blur p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-xs text-[#8c9387] font-mono">Platform Setup Progress</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Anthropic Claude — Enterprise workspace", done: true },
                    { label: "OpenAI ChatGPT — Team accounts provisioned", done: true },
                    { label: "Google Gemini — API keys configured", done: true },
                    { label: "Microsoft Copilot — M365 integration", done: true },
                    { label: "Custom prompt library — 24 role-based packs", done: true },
                    { label: "Team training sessions — 3 of 4 complete", done: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 rounded-lg bg-[#1a1c19]/5 border border-white/5 px-4 py-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-green-400/20" : "bg-[#a1d494]/20"}`}>
                        {item.done ? (
                          <Check className="h-3 w-3 text-green-400" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-[#a1d494] animate-pulse" />
                        )}
                      </div>
                      <span className="text-sm text-[#bcf1ae]/80 font-mono">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#a1d494]/50 font-mono">5 of 6 tasks complete</span>
                  <span className="text-xs text-green-400/70 font-mono">Est. 2 days remaining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE GAP (dark section)                                       */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#121411"}}>
        <div className="absolute inset-0 grain z-0" />

        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            Having ChatGPT seats isn&apos;t a strategy.
          </h2>
          <div className="w-16 h-0.5 bg-[#bcf1ae] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "No one was trained on how to prompt effectively",
              "Tools aren't connected to your actual data and workflows",
              "There's no measurement of adoption or ROI",
              "Everyone's using AI differently (or not at all)",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#1a1c19]/5 backdrop-blur-sm p-5 rounded-lg text-left animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <XCircle className="h-6 w-6 text-[#bcf1ae] flex-shrink-0 mt-0.5" />
                <span className="text-white text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DAY IN THE LIFE — Connected Platforms Mockup                 */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)"}}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              What AI-native looks like in practice.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#bcf1ae]/80">
              Your team uses the right AI tool for every task — connected, trained, and measured.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Mockup: Team Activity Feed */}
            <div className="rounded-xl border border-white/10 bg-[#1a1c19]/5 backdrop-blur p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-[#a1d494]/50 font-mono">Team AI Activity — Today</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { user: "Sarah (Sales)", action: "Generated proposal draft", tool: "Claude", time: "2m ago", icon: FileText },
                  { user: "Mike (Engineering)", action: "Refactored auth module", tool: "Cursor AI", time: "8m ago", icon: Zap },
                  { user: "Jen (Marketing)", action: "Wrote campaign copy for Q2", tool: "ChatGPT", time: "15m ago", icon: MessageSquare },
                  { user: "Carlos (Ops)", action: "Analyzed vendor contracts", tool: "Gemini", time: "22m ago", icon: BarChart3 },
                  { user: "Lisa (Support)", action: "Updated knowledge base", tool: "Claude", time: "31m ago", icon: FileText },
                ].map((item) => (
                  <div key={item.user} className="flex items-center gap-3 rounded-lg bg-[#1a1c19]/5 border border-white/5 px-4 py-3">
                    <item.icon className="h-4 w-4 text-[#a1d494]/60 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white font-mono truncate">{item.user}</p>
                      <p className="text-xs text-[#a1d494]/50 font-mono truncate">{item.action}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-medium bg-[#1a1c19]/15 text-white px-2 py-0.5 rounded-full border border-white/10">{item.tool}</span>
                      <p className="text-xs text-[#a1d494]/40 font-mono mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#a1d494]/50 font-mono">47 team members active today</span>
                <span className="text-xs text-green-300/70 font-mono">89% adoption rate</span>
              </div>
            </div>

            {/* Mockup: Platform Usage Dashboard */}
            <div className="rounded-xl border border-white/10 bg-[#1a1c19]/5 backdrop-blur p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-[#a1d494]/50 font-mono">Platform Usage — This Week</span>
              </div>

              {/* Usage bars */}
              <div className="space-y-4 mb-5">
                {[
                  { platform: "Anthropic Claude", pct: 85, queries: "2,847" },
                  { platform: "OpenAI ChatGPT", pct: 62, queries: "1,923" },
                  { platform: "Google Gemini", pct: 41, queries: "1,104" },
                  { platform: "Microsoft Copilot", pct: 38, queries: "987" },
                  { platform: "Cursor AI", pct: 29, queries: "742" },
                ].map((item) => (
                  <div key={item.platform}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-white font-mono">{item.platform}</span>
                      <span className="text-xs text-[#a1d494]/50 font-mono">{item.queries} queries</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1a1c19]/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#a1d494] to-white/80"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary stats */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                {[
                  { label: "Total Queries", value: "7,603" },
                  { label: "Avg/Person", value: "162" },
                  { label: "Est. Hours Saved", value: "340" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center rounded-lg bg-[#1a1c19]/5 border border-white/5 py-2.5 px-2">
                    <p className="text-lg font-bold text-white font-mono">{stat.value}</p>
                    <p className="text-xs text-[#a1d494]/50 font-mono">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THREE TIER PRICING CARDS                                     */}
      {/* ============================================================ */}
      <section className="section-padding px-4 relative" style={{backgroundColor: "#1a1c19"}}>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#e3e3dd"}}>
              Three tiers. One partner. Start anywhere.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#c2c9bb"}}>
              Each tier builds on the previous one. Start with implementation,
              add workflows, then deploy agents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {tiers.map((tier) => {
              const Icon = tier.icon

              if (tier.featured) {
                return (
                  <div key={tier.name} className="relative rounded-2xl overflow-hidden flex flex-col shadow-xl shadow-[#bcf1ae]/10" style={{background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)"}}>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a1c19] text-[#bcf1ae] text-xs font-bold px-4 py-1 rounded-full shadow-md z-10">
                      MOST POPULAR
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon className="h-5 w-5 text-[#a1d494]" />
                        <span className="text-[#a1d494] font-medium text-sm">
                          {tier.label}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-[#bcf1ae] text-sm italic mb-4">
                        {tier.tagline}
                      </p>
                      <p className="text-[#bcf1ae]/80 text-sm mb-6 leading-relaxed">
                        {tier.description}
                      </p>

                      <ul className="space-y-3 mb-8 flex-1">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-[#a1d494] flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Mini mockup: workflow automation preview */}
                      <div className="rounded-lg border border-white/10 bg-[#1a1c19]/5 p-3 mb-6">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                          <span className="ml-1 text-[10px] text-[#a1d494]/40 font-mono">workflow.config</span>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            "trigger: new_support_ticket",
                            "  -> classify (Claude)",
                            "  -> route_to_team",
                            "  -> draft_response (GPT-4)",
                            "  -> notify #slack-support",
                          ].map((line) => (
                            <p key={line} className="text-xs text-[#bcf1ae]/60 font-mono leading-tight">{line}</p>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-2xl font-bold text-white">
                          {tier.price}
                        </p>
                      </div>

                      <Button
                        asChild
                        className="w-full bg-[#1a1c19] hover:bg-[#292b27] text-[#bcf1ae] font-semibold"
                      >
                        <Link href="/get-started">{tier.cta}</Link>
                      </Button>
                    </div>
                  </div>
                )
              }

              // Tier 1 mini mockup
              const isTier1 = tier.label === "Tier 1"
              // Tier 3 mini mockup
              const isTier3 = tier.label === "Tier 3"

              return (
                <div key={tier.name} className="relative rounded-2xl bg-[#1a1c19] border border-[#42493e]/15 p-8 flex flex-col shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-[#bcf1ae]" />
                    <span className="text-[#bcf1ae] font-medium text-sm">
                      {tier.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{color: "#e3e3dd"}}>
                    {tier.name}
                  </h3>
                  <p className="text-sm italic mb-4" style={{color: "#c2c9bb"}}>
                    {tier.tagline}
                  </p>
                  <p className="text-sm mb-6 leading-relaxed" style={{color: "#c2c9bb"}}>
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#bcf1ae] flex-shrink-0 mt-0.5" />
                        <span className="text-sm" style={{color: "#c2c9bb"}}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tier 1: connected platforms mini mockup */}
                  {isTier1 && (
                    <div className="rounded-lg border border-[#42493e]/15 bg-[#292b27] p-3 mb-6">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                        <span className="ml-1 text-[10px] text-[#8c9387] font-mono">integrations</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { name: "Gmail + Claude", status: "Connected" },
                          { name: "Slack + ChatGPT", status: "Connected" },
                          { name: "Drive + Gemini", status: "Connected" },
                          { name: "CRM + Copilot", status: "Pending" },
                        ].map((item) => (
                          <div key={item.name} className="flex items-center justify-between rounded bg-[#1a1c19] border border-[#42493e]/15 px-3 py-1.5">
                            <span className="text-xs text-[#8c9387] font-mono">{item.name}</span>
                            <span className={`text-[10px] font-mono ${item.status === "Connected" ? "text-green-500" : "text-amber-500"}`}>{item.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tier 3: agent status mini mockup */}
                  {isTier3 && (
                    <div className="rounded-lg border border-[#42493e]/15 bg-[#292b27] p-3 mb-6">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                        <span className="ml-1 text-[10px] text-[#8c9387] font-mono">openclaw agent</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { label: "Agent Status", value: "Online", color: "text-green-500" },
                          { label: "Uptime", value: "99.97%", color: "text-[#8c9387]" },
                          { label: "Tools Active", value: "12 / 12", color: "text-[#8c9387]" },
                          { label: "Queries Today", value: "284", color: "text-[#bcf1ae]" },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-between rounded bg-[#1a1c19] border border-[#42493e]/15 px-3 py-1.5">
                            <span className="text-xs text-[#8c9387] font-mono">{item.label}</span>
                            <span className={`text-xs font-mono font-medium ${item.color}`}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-2xl font-bold" style={{color: "#e3e3dd"}}>
                      {tier.price}
                    </p>
                    {tier.priceNote && (
                      <p className="text-xs mt-1" style={{color: "#c2c9bb"}}>
                        {tier.priceNote}
                      </p>
                    )}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-[#bcf1ae] hover:opacity-90 text-[#0b390a]"
                  >
                    <Link href="/get-started">{tier.cta}</Link>
                  </Button>
                </div>
              )
            })}
          </div>

          <p className="text-sm text-center mb-16" style={{color: "#c2c9bb"}}>
            All tiers are available month-to-month. No lock-in.
          </p>

          {/* Retainer Section */}
          <div className="rounded-2xl border border-[#42493e]/15 bg-[#1a1c19] p-8 md:p-10 shadow-md">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{color: "#e3e3dd"}}>
                Ongoing Support &amp; Retainers
              </h3>
              <p className="text-lg" style={{color: "#c2c9bb"}}>
                All implementations come with optional ongoing support. We don&apos;t just set it up and leave.
              </p>
            </div>

            <div className="rounded-lg border border-[#bcf1ae]/20 bg-[#292b27]/30 p-5 text-center mb-8">
              <p className="text-sm leading-relaxed" style={{color: "#c2c9bb"}}>
                All implementations are complete standalone engagements. Retainers are optional — add ongoing support if you want us to continue building and iterating after launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg border border-[#42493e]/15 p-6 hover:border-[#bcf1ae]/20 transition-colors">
                <h4 className="text-lg font-bold mb-1" style={{color: "#e3e3dd"}}>Basic Support</h4>
                <p className="text-2xl font-bold text-[#bcf1ae] mb-3">$300<span className="text-sm font-normal" style={{color: "#c2c9bb"}}>/mo</span></p>
                <p className="text-sm leading-relaxed" style={{color: "#c2c9bb"}}>
                  Monthly check-in, issue resolution, minor workflow adjustments.
                </p>
              </div>
              <div className="rounded-lg border border-[#bcf1ae]/20 bg-[#292b27]/50 p-6">
                <h4 className="text-lg font-bold mb-1" style={{color: "#e3e3dd"}}>Standard Support</h4>
                <p className="text-2xl font-bold text-[#bcf1ae] mb-3">$750<span className="text-sm font-normal" style={{color: "#c2c9bb"}}>/mo</span></p>
                <p className="text-sm leading-relaxed" style={{color: "#c2c9bb"}}>
                  Bi-weekly calls, ongoing workflow optimization, new prompt packs as your needs evolve, priority response.
                </p>
              </div>
              <div className="rounded-lg border border-[#42493e]/15 p-6 hover:border-[#bcf1ae]/20 transition-colors">
                <h4 className="text-lg font-bold mb-1" style={{color: "#e3e3dd"}}>Dedicated Partnership</h4>
                <p className="text-2xl font-bold text-[#bcf1ae] mb-3">$1,500+<span className="text-sm font-normal" style={{color: "#c2c9bb"}}>/mo</span></p>
                <p className="text-sm leading-relaxed" style={{color: "#c2c9bb"}}>
                  Weekly strategy calls, continuous workflow builds and iteration, dedicated Slack channel, first priority on new capabilities.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-[#bcf1ae]/20 bg-[#292b27]/30 p-5 text-center">
              <p className="font-medium" style={{color: "#e3e3dd"}}>
                Tech Basics Add-On — <span className="text-[#bcf1ae]">$297/mo</span>
              </p>
              <p className="text-sm mt-1" style={{color: "#c2c9bb"}}>
                Add our Tech Basics package (website, phone, texting, CRM, invoicing) to any AI Transformation engagement. Bundle discount available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PLATFORM COMPARISON TABLE                                    */}
      {/* ============================================================ */}
      <section className="section-padding px-4 bg-[#1a1c19]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#e3e3dd"}}>
              We support these platforms
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#c2c9bb"}}>
              We help you pick the right platform for your team and handle the
              full rollout.
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#292b27] border-b-2 border-[#bcf1ae]/20">
                    <TableHead className="font-bold text-[#e3e3dd]">Platform</TableHead>
                    <TableHead className="font-bold text-[#e3e3dd]">Per Seat Cost</TableHead>
                    <TableHead className="font-bold text-[#e3e3dd]">Min Seats</TableHead>
                    <TableHead className="font-bold text-[#e3e3dd]">Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {platforms.map((p) => (
                    <TableRow key={p.name} className="hover:bg-[#292b27]/50">
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell>{p.cost}</TableCell>
                      <TableCell>{p.minSeats}</TableCell>
                      <TableCell className="text-[#c2c9bb]">{p.bestFor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section className="section-padding px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#e3e3dd"}}>
              How it works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#c2c9bb"}}>
              Three phases. Clear deliverables at each step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#a1d494] to-[#bcf1ae]" />

            {steps.map((step) => (
              <div key={step.number} className="text-center relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#bcf1ae] text-white font-display font-bold text-lg mb-6 relative z-10">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#292b27] mb-4">
                  <step.icon className="h-5 w-5 text-[#bcf1ae]" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: "#e3e3dd"}}>{step.title}</h3>
                <p style={{color: "#c2c9bb"}}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="section-padding px-4" style={{backgroundColor: "#1a1c19"}}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#e3e3dd"}}>
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#c2c9bb] text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA BANNER                                                   */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#121411"}}>
        <div className="absolute inset-0 grain z-0" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#bcf1ae] rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#3b6934] rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform how your team works with AI?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{color: "#c2c9bb"}}>
            Start with an audit. We&apos;ll assess your tools, your team, and
            your workflows - then give you a concrete plan to move forward.
          </p>
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] shadow-lg group"
          >
            <Link href="/get-started" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
