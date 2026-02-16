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
} from "lucide-react"

export const metadata = {
  title: "AI Transformation | Centurion AI",
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
    price: "From $1,500 setup + $199/mo",
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
    price: "From $3,500 setup + $499/mo",
    priceNote: null,
    cta: "Get Started",
    featured: true,
  },
  {
    icon: Server,
    label: "Tier 3",
    name: "OpenClaw AI Agent Implementation",
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
    price: "From $3,500 setup + $199/mo",
    priceNote: null,
    cta: "Deploy Your Agent",
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

export default function AITransformationPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-blue-400/50 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-900/50 rounded-full border border-blue-700/50">
            <span className="text-blue-300 font-medium text-sm">
              AI Transformation
            </span>
          </div>

          <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            Go from AI-curious to AI-native.
          </h1>

          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{color: "#94A3B8"}}>
            Most companies buy AI seats and hope for the best. We set up the
            platforms, connect your tools, train your team, and build the
            workflows that make AI actually useful.
          </p>

          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 group opacity-0 animate-reveal stagger-3"
          >
            <Link href="/get-started" className="flex items-center">
              Start with an AI Audit
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE GAP (dark section)                                       */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute inset-0 grain z-0" />

        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            Having ChatGPT seats isn&apos;t a strategy.
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "No one was trained on how to prompt effectively",
              "Tools aren't connected to your actual data and workflows",
              "There's no measurement of adoption or ROI",
              "Everyone's using AI differently (or not at all)",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-5 rounded-lg text-left animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <XCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THREE TIER PRICING CARDS                                     */}
      {/* ============================================================ */}
      <section className="section-padding px-4 relative" style={{backgroundColor: "#F8FAFC"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              Three tiers. One partner. Start anywhere.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#64748B"}}>
              Each tier builds on the previous one. Start with implementation,
              add workflows, then deploy agents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {tiers.map((tier) => {
              const Icon = tier.icon

              if (tier.featured) {
                return (
                  <div key={tier.name} className="relative rounded-2xl bg-blue-600 p-8 flex flex-col shadow-xl shadow-blue-600/20">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold px-4 py-1 rounded-full shadow-md">
                      MOST POPULAR
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="h-5 w-5 text-blue-200" />
                      <span className="text-blue-200 font-medium text-sm">
                        {tier.label}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-blue-100 text-sm italic mb-4">
                      {tier.tagline}
                    </p>
                    <p className="text-blue-100/80 text-sm mb-6 leading-relaxed">
                      {tier.description}
                    </p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-200 flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6">
                      <p className="text-2xl font-bold text-white">
                        {tier.price}
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-white hover:bg-blue-50 text-blue-600 font-semibold"
                    >
                      <Link href="/get-started">{tier.cta}</Link>
                    </Button>
                  </div>
                )
              }

              return (
                <div key={tier.name} className="relative rounded-2xl bg-white border border-slate-200/60 p-8 flex flex-col shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-blue-500" />
                    <span className="text-blue-600 font-medium text-sm">
                      {tier.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{color: "#0F172A"}}>
                    {tier.name}
                  </h3>
                  <p className="text-sm italic mb-4" style={{color: "#64748B"}}>
                    {tier.tagline}
                  </p>
                  <p className="text-sm mb-6 leading-relaxed" style={{color: "#64748B"}}>
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm" style={{color: "#64748B"}}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <p className="text-2xl font-bold" style={{color: "#0F172A"}}>
                      {tier.price}
                    </p>
                    {tier.priceNote && (
                      <p className="text-xs mt-1" style={{color: "#94A3B8"}}>
                        {tier.priceNote}
                      </p>
                    )}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white"
                  >
                    <Link href="/get-started">{tier.cta}</Link>
                  </Button>
                </div>
              )
            })}
          </div>

          <p className="text-sm text-center" style={{color: "#64748B"}}>
            All tiers are available month-to-month. No lock-in. Audit fees
            credited toward Tier 1.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PLATFORM COMPARISON TABLE                                    */}
      {/* ============================================================ */}
      <section className="section-padding px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              We support these platforms
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#64748B"}}>
              We help you pick the right platform for your team and handle the
              full rollout.
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50 border-b-2 border-blue-200">
                    <TableHead className="font-bold text-gray-900">Platform</TableHead>
                    <TableHead className="font-bold text-gray-900">Per Seat Cost</TableHead>
                    <TableHead className="font-bold text-gray-900">Min Seats</TableHead>
                    <TableHead className="font-bold text-gray-900">Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {platforms.map((p) => (
                    <TableRow key={p.name} className="hover:bg-blue-50/50">
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell>{p.cost}</TableCell>
                      <TableCell>{p.minSeats}</TableCell>
                      <TableCell className="text-gray-600">{p.bestFor}</TableCell>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              How it works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#64748B"}}>
              Three phases. Clear deliverables at each step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-300 to-blue-400" />

            {steps.map((step) => (
              <div key={step.number} className="text-center relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white font-display font-bold text-lg mb-6 relative z-10">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 mb-4">
                  <step.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: "#0F172A"}}>{step.title}</h3>
                <p style={{color: "#64748B"}}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="section-padding px-4" style={{backgroundColor: "#F8FAFC"}}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
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
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 grain z-0" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform how your team works with AI?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{color: "#94A3B8"}}>
            Start with an audit. We&apos;ll assess your tools, your team, and
            your workflows - then give you a concrete plan to move forward.
          </p>
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-blue-500 hover:bg-blue-400 text-white shadow-lg group"
          >
            <Link href="/get-started" className="flex items-center">
              Book Your AI Audit
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
