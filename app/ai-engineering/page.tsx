import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  ClipboardCheck,
  Users,
  Repeat,
  Rocket,
  Check,
  X,
  Star,
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] z-0" />
        <div className="absolute inset-0 grain z-0" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-900/50 rounded-full border border-blue-700/50">
            <span className="text-blue-300 font-medium text-sm">
              AI-Augmented Development
            </span>
          </div>

          <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            Ship faster. Spend less.{" "}
            <span className="text-blue-400">Skip the hiring.</span>
          </h1>

          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{ color: "#94A3B8" }}>
            Our AI-augmented engineering teams deliver working software in
            biweekly sprints. We use Claude Code, Cursor, and custom agent
            workflows to build at 3x the speed of traditional agencies — and
            pass the savings to you.
          </p>

          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 font-medium bg-white text-slate-900 hover:bg-slate-50 shadow-lg group opacity-0 animate-reveal stagger-3"
          >
            <Link href="/get-started" className="flex items-center">
              Scope Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl px-4">
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
                className="bg-white rounded-xl shadow-md card-hover overflow-hidden border border-slate-200/60"
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

      {/* How We Work */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
              How we work.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              From first call to production. No mystery, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-blue-200" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white font-display font-bold text-lg mb-4 z-10">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "#0F172A" }}>
                    {step.title}
                  </h3>
                  <span className="inline-block text-sm font-medium text-blue-600 mb-3">
                    {step.timeline}
                  </span>
                  <p className="leading-relaxed text-sm" style={{ color: "#64748B" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us vs. Traditional Agencies */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
              Why us vs. traditional agencies.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              AI tooling changes the math on outsourced engineering. Here is what
              that looks like.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/5">
                    &nbsp;
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-gray-400 uppercase tracking-wider w-2/5">
                    Traditional Agency
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-blue-600 uppercase tracking-wider w-2/5">
                    Centurion AI Engineering
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.label}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }
                  >
                    <td className="py-4 px-6 font-medium text-gray-900 text-sm">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-gray-500 text-sm">
                      <span className="flex items-start gap-2">
                        <X className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-900 text-sm font-medium">
                      <span className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
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
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
              Simple, transparent pricing.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              $150/hr. You submit tickets, we build them. Pick your weekly hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-xl p-8 flex flex-col ${
                  tier.popular
                    ? "gradient-border shadow-lg shadow-blue-100/50"
                    : "shadow-md border border-gray-100 card-hover"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white hover:bg-blue-500 px-3 py-1 text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-blue-700">
                      {tier.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      /{tier.priceLabel}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-900">Team:</span>{" "}
                    {tier.team}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">
                      Timeline:
                    </span>{" "}
                    {tier.timeline}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">
                      Ideal for:
                    </span>{" "}
                    {tier.idealFor}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6 mb-8 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant={tier.popular ? "default" : "outline"}
                  className={`w-full ${
                    tier.popular
                      ? "bg-blue-500 hover:bg-blue-400 text-white"
                      : "border-blue-200 text-blue-700 hover:bg-blue-50"
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
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
              Our stack.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Real tools we use daily. Not a logo wall — a working toolkit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-block px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-sm font-medium border border-blue-100"
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
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#0F172A" }}>
              Frequently asked questions.
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left text-base font-medium text-gray-900 hover:no-underline hover:text-blue-700 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] z-0" />
        <div className="absolute inset-0 grain z-0" />
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
