import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const tier1Plans = [
  {
    name: "Starter",
    setup: "$1,500",
    monthly: "$199/mo",
    popular: false,
    features: [
      "5-15 seats",
      "1 platform",
      "3 connector integrations",
      "3 role prompt packs",
      "1hr live training session",
      "Email support",
    ],
  },
  {
    name: "Growth",
    setup: "$3,000",
    monthly: "$399/mo",
    popular: true,
    features: [
      "15-50 seats",
      "1 platform",
      "6 connector integrations",
      "5 role prompt packs",
      "2hr live training session",
      "Quarterly prompt refresh",
      "Chat support",
    ],
  },
  {
    name: "Scale",
    setup: "$5,000",
    monthly: "$699/mo",
    popular: false,
    features: [
      "50-150 seats",
      "1-2 platforms",
      "All connector integrations",
      "8+ role prompt packs",
      "3hr training + recorded library",
      "Monthly optimization call",
    ],
  },
]

const tier2Plans = [
  {
    name: "Workflow Starter",
    setup: "$3,500",
    monthly: "$499/mo",
    popular: false,
    features: [
      "Claude Code on 3-5 machines",
      "5 custom skills",
      "2 workflow automations",
      "Playbook documentation",
    ],
  },
  {
    name: "Workflow Pro",
    setup: "$6,000",
    monthly: "$799/mo",
    popular: true,
    features: [
      "Claude Code on 10+ machines",
      "10 custom skills",
      "5 workflow automations",
      "Multi-agent setup",
      "Monthly optimization",
    ],
  },
  {
    name: "Workflow Enterprise",
    setup: "$10,000",
    monthly: "$1,200/mo",
    popular: false,
    features: [
      "Full deployment",
      "Unlimited skills",
      "Custom agent teams",
      "API integrations",
      "Weekly optimization",
      "Priority support",
    ],
  },
]

const tier3Plans = [
  {
    name: "Self-Hosted",
    setup: "$3,500",
    monthly: "$199/mo",
    popular: false,
    features: [
      "Install on your hardware",
      "Security hardening",
      "Tool permissions & sandboxing",
      "Email support",
    ],
  },
  {
    name: "Cloud Hosted",
    setup: "$6,000",
    monthly: "$349/mo",
    popular: true,
    features: [
      "Isolated container",
      "BYOK or included API budget",
      "Monitoring & usage reporting",
      "Chat support",
    ],
  },
  {
    name: "Cloud + Local Models",
    setup: "$8,000",
    monthly: "$499/mo",
    popular: false,
    features: [
      "GPU-backed infrastructure",
      "Local model routing",
      "Monitoring & usage reporting",
      "Priority support",
    ],
  },
  {
    name: "Managed Premium",
    setup: "$12,000",
    monthly: "$799/mo",
    popular: false,
    features: [
      "Everything in Cloud Hosted",
      "Monthly strategy session",
      "Usage reporting & analytics",
      "Proactive optimization",
    ],
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
      "Tier 1 (Foundations) takes 2-4 weeks. Tier 2 (Workflows) takes 4-8 weeks. Tier 3 (Infrastructure) takes 2-6 weeks depending on complexity.",
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
/*  PRICING CARD COMPONENT                                             */
/* ------------------------------------------------------------------ */

function PricingCard({
  name,
  setup,
  monthly,
  popular,
  features,
}: {
  name: string
  setup: string
  monthly: string
  popular: boolean
  features: string[]
}) {
  return (
    <Card
      className={
        popular
          ? "relative ring-2 ring-brand-500 shadow-lg shadow-brand-100/50"
          : "relative shadow-md"
      }
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 hover:bg-brand-600 text-white px-3 py-1 text-xs">
          MOST POPULAR
        </Badge>
      )}
      <div className="h-1 rounded-t-lg bg-gradient-to-r from-brand-500 to-brand-700" />
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold text-gray-900">{setup}</span>
          <span className="text-gray-500 text-sm ml-1">setup</span>
        </div>
        <div className="text-brand-600 font-semibold text-lg">+ {monthly}</div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className={
            popular
              ? "w-full bg-brand-600 hover:bg-brand-700"
              : "w-full bg-gray-900 hover:bg-gray-800"
          }
        >
          <Link href="/get-started">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function AITransformationPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white z-0" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-200 rounded-full opacity-20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-brand-50 rounded-full border border-brand-100">
            <span className="text-brand-700 font-medium text-sm">
              AI Transformation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-brand-950">
            Go from AI-curious to AI-native.
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Most companies buy AI seats and hope for the best. We set up the
            platforms, connect your tools, train your team, and build the
            workflows that make AI actually useful.
          </p>

          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-100/50 group"
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
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-black z-0" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-700 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-800 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Having ChatGPT seats isn&apos;t a strategy.
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "No one was trained on how to prompt effectively",
              "Tools aren't connected to your actual data and workflows",
              "There's no measurement of adoption or ROI",
              "Everyone's using AI differently (or not at all)",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-5 rounded-lg text-left animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TIER 1: AI FOUNDATIONS                                        */}
      {/* ============================================================ */}
      <section className="section-padding px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Tier header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-brand-50 rounded-full border border-brand-100">
              <Layers className="h-4 w-4 text-brand-600" />
              <span className="text-brand-700 font-medium text-sm">
                Tier 1
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              AI Foundations
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Platform setup, connector integration, role-based prompt packs,
              and team training. Everything your team needs to start using AI
              effectively.
            </p>
          </div>

          {/* Platform comparison table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Platform comparison</h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-900">Platform</TableHead>
                    <TableHead className="font-semibold text-gray-900">Per Seat Cost</TableHead>
                    <TableHead className="font-semibold text-gray-900">Min Seats</TableHead>
                    <TableHead className="font-semibold text-gray-900">Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {platforms.map((p) => (
                    <TableRow key={p.name}>
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

          {/* What's Included */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">What&apos;s included</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Platform selection & setup",
                  desc: "We pick the right platform for your team and handle the full rollout.",
                },
                {
                  title: "3-6+ connector integrations",
                  desc: "Gmail, Slack, Drive, CRM, and more - connected to your AI platform.",
                },
                {
                  title: "Role-based prompt packs",
                  desc: "5-10 prompts per role for Sales, Marketing, Ops, Finance, and Engineering.",
                },
                {
                  title: "1-3hr live training",
                  desc: "Hands-on session with your team, recorded for future reference.",
                },
              ].map((item) => (
                <Card key={item.title} className="card-hover">
                  <div className="h-1 rounded-t-lg bg-gradient-to-r from-brand-500 to-brand-700" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {tier1Plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center">
            You pay the platform directly for seats. Our fee is for setup,
            configuration, training, and ongoing support.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TIER 2: CUSTOM WORKFLOWS                                     */}
      {/* ============================================================ */}
      <section className="section-padding px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Tier header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-brand-50 rounded-full border border-brand-100">
              <Workflow className="h-4 w-4 text-brand-600" />
              <span className="text-brand-700 font-medium text-sm">
                Tier 2
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Custom Workflows
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Move from &ldquo;everyone has chat access&rdquo; to automated
              workflows that run multi-step processes. Less manual work, more
              consistent output.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">What&apos;s included</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Claude Code / Codex setup",
                  desc: "Installation and configuration on your team's machines.",
                },
                {
                  title: "Custom slash commands",
                  desc: "/draft-proposal, /weekly-report, /onboard-client - built for your workflows.",
                },
                {
                  title: "Multi-agent workflows",
                  desc: "Agents that coordinate across tasks and hand off work automatically.",
                },
                {
                  title: "Tool integrations",
                  desc: "Connect to your internal APIs, databases, and third-party services.",
                },
                {
                  title: "Playbook documentation",
                  desc: "Every workflow documented so your team can maintain and extend them.",
                },
              ].map((item) => (
                <Card key={item.title} className="card-hover">
                  <div className="h-1 rounded-t-lg bg-gradient-to-r from-brand-500 to-brand-700" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {tier2Plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TIER 3: MANAGED AI INFRASTRUCTURE                            */}
      {/* ============================================================ */}
      <section className="section-padding px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Tier header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-brand-50 rounded-full border border-brand-100">
              <Server className="h-4 w-4 text-brand-600" />
              <span className="text-brand-700 font-medium text-sm">
                Tier 3
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Managed AI Infrastructure
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Always-on AI agents running on your infrastructure, hosted and
              managed by us. You bring the use cases, we handle the ops.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">What&apos;s included</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "OpenClaw deployment",
                  desc: "Full platform deployment on your infrastructure or ours.",
                },
                {
                  title: "Security hardening",
                  desc: "Locked-down configurations, access controls, and audit trails.",
                },
                {
                  title: "Tool permissions & sandboxing",
                  desc: "Fine-grained control over what agents can access and execute.",
                },
                {
                  title: "Monitoring & reporting",
                  desc: "Usage dashboards, cost tracking, and performance metrics.",
                },
              ].map((item) => (
                <Card key={item.title} className="card-hover">
                  <div className="h-1 rounded-t-lg bg-gradient-to-r from-brand-500 to-brand-700" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing Cards - 2x2 grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {tier3Plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section className="section-padding px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Three phases. Clear deliverables at each step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-brand-200" />

            {steps.map((step) => (
              <div key={step.number} className="text-center relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-600 text-white font-bold text-lg mb-6 relative z-10">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 mb-4">
                  <step.icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="section-padding px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">
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
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-black z-0" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-700 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-800 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform how your team works with AI?
          </h2>
          <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto">
            Start with an audit. We&apos;ll assess your tools, your team, and
            your workflows - then give you a concrete plan to move forward.
          </p>
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-white text-brand-900 hover:bg-brand-50 shadow-lg group"
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
