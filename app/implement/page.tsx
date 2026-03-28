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
  XCircle,
  Layers,
  Link2,
  Workflow,
  Plug,
  Calendar,
  Mail,
  MessageSquare,
  FolderOpen,
  Database,
  Clock,
} from "lucide-react"

export const metadata = {
  title: "Implement | Verdant AI Partners",
  description:
    "Pick your AI stack, connect it to your tools, build workflows that run. A focused 2-4 week engagement for teams of 5-50. $3,000-$5,000.",
  alternates: {
    canonical: "https://verdantaipartners.com/implement",
  },
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: "01",
    title: "Choose Your AI Stack",
    description:
      "We evaluate your team, your tools, and your budget — then recommend the right enterprise AI platform. We recommend Claude for most teams, but we'll make the right call for yours.",
  },
  {
    number: "02",
    title: "Connect It to Your Work",
    description:
      "We plug AI into your actual tools — Gmail, Slack, Drive, CRM, internal docs. AI that can't see your data is just a chatbot. AI connected to your data is a team member.",
  },
  {
    number: "03",
    title: "Build Workflows That Run",
    description:
      "We build role-based prompts, structured templates, and scheduled workflows that actually run your processes. Not 'play around with AI' — real automation that saves real time.",
  },
]

const deliverables = [
  "Platform selection and full workspace setup (accounts, SSO, security)",
  "Connector integrations — Gmail, Slack, Drive, CRM, and more",
  "Role-based prompt packs for every department",
  "2-3 live team training sessions (recorded for future hires)",
  "Structured workflow templates (daily, weekly, project-based)",
  "A 'what to measure' guide so you know it's working",
  "30 days of Slack/email support after launch",
]

const goodFit = [
  "Your team has 5-50 people and you know AI matters but haven't really started",
  "You're paying for AI seats that nobody uses effectively",
  "You want one person to just handle this — not a 6-month consulting engagement",
  "You're a founder, ops lead, or CTO who wants to move fast",
]

const notFit = [
  { text: "You're a solo founder who just needs personal AI tips", link: "/blog", linkLabel: "Check out our blog" },
  { text: "You need a full custom AI product built from scratch", link: "/engineering", linkLabel: "See AI Engineering" },
  { text: "You want a 200-page strategy deck before doing anything", link: "/strategy", linkLabel: "See Strategy" },
  { text: "You already have dedicated AI infrastructure and just need engineers", link: "/engineering", linkLabel: "See AI Engineering" },
]

const faqs = [
  {
    question: "Why do you recommend Claude / Anthropic?",
    answer:
      "For most business teams, Claude is the best combination of reasoning quality, safety, and enterprise features. But we're not locked in — if your team is deep in Google Workspace, Gemini might make more sense. If you need Microsoft 365 integration, Copilot could be right. We evaluate and recommend; you decide.",
  },
  {
    question: "We already have ChatGPT seats. Do we need to switch?",
    answer:
      "Maybe not. Sometimes the right move is to keep what you have and just connect it properly. We'll tell you honestly whether switching platforms is worth it or whether the real problem is that nobody configured the tools for your actual workflows.",
  },
  {
    question: "How long does this take?",
    answer:
      "2-4 weeks from kickoff to fully deployed. Week 1 is selection and setup. Weeks 2-3 are integration and workflow building. Week 3-4 is training and handoff. You keep working normally the entire time.",
  },
  {
    question: "What happens after the engagement?",
    answer:
      "You own everything — the prompts, the workflows, the configurations. If you want ongoing support and optimization, we offer retainers starting at $300/month. But the engagement is designed to be complete on its own.",
  },
]

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ImplementPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{ backgroundColor: "#121411" }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bcf1ae]/30 via-[#bcf1ae]/30 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#bcf1ae] rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3b6934] rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#0d0f0c]/50 rounded-full border border-[#1a2e1a]/50">
            <span className="text-[#a1d494] font-medium text-sm">The simplest move that matters most</span>
          </div>

          <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            Pick your AI stack. Connect it. Use it.
          </h1>

          <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{ color: "#c2c9bb" }}>
            Most teams buy AI seats and hope for the best. We come in, set up the right platform,
            connect it to your actual tools and data, train your team, and build the workflows
            that make AI part of how you work — not something you forget about.
          </p>

          <div className="mb-8 opacity-0 animate-reveal stagger-3">
            <p className="text-3xl font-bold text-[#bcf1ae] mb-1">$3,000 – $5,000</p>
            <p className="text-sm" style={{ color: "#c2c9bb" }}>
              One-time engagement &middot; 2-4 weeks &middot; Scales with team size
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-reveal stagger-3">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 font-medium bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] shadow-lg shadow-[#bcf1ae]/10 group"
            >
              <Link href="/get-started" className="flex items-center">
                Let&apos;s Do This
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE 3 STEPS                                                  */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#121411" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Three steps. That&apos;s it.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c2c9bb" }}>
              The number one thing your team can do today to get real value from AI.
            </p>
          </div>

          {/* Steps with connecting line */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#bcf1ae]/30 via-[#bcf1ae]/30 to-[#bcf1ae]/30" />

            {steps.map((step, i) => (
              <div key={step.number} className={`text-center relative opacity-0 animate-reveal stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#bcf1ae] text-[#0b390a] font-display font-bold text-lg mb-5 relative z-10 shadow-lg shadow-[#bcf1ae]/10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: "#c2c9bb" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Terminal mockups below the steps */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Mockup 1: Stack Recommendation */}
            <div className="rounded-xl border border-white/10 bg-[#1a1c19]/5 backdrop-blur p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-[#a1d494]/50 font-mono">Stack Evaluation</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Anthropic Claude", status: "Recommended", highlight: true },
                  { name: "OpenAI ChatGPT", status: "Evaluated", highlight: false },
                  { name: "Google Gemini", status: "Evaluated", highlight: false },
                  { name: "Microsoft Copilot", status: "Evaluated", highlight: false },
                ].map((item) => (
                  <div key={item.name} className={`flex items-center justify-between rounded-lg px-3 py-2 ${item.highlight ? "bg-[#bcf1ae]/10 border border-[#bcf1ae]/20" : "bg-[#1a1c19]/5 border border-white/5"}`}>
                    <span className={`text-sm font-mono ${item.highlight ? "text-[#bcf1ae]" : "text-white/70"}`}>{item.name}</span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${item.highlight ? "bg-[#bcf1ae]/20 text-[#bcf1ae]" : "text-[#8c9387]"}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup 2: Integrations Connected */}
            <div className="rounded-xl border border-white/10 bg-[#1a1c19]/5 backdrop-blur p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-[#a1d494]/50 font-mono">Integrations</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Gmail", icon: Mail },
                  { name: "Slack", icon: MessageSquare },
                  { name: "Google Drive", icon: FolderOpen },
                  { name: "CRM", icon: Database },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 rounded-lg bg-[#1a1c19]/5 border border-white/5 px-3 py-2">
                    <item.icon className="h-4 w-4 text-[#a1d494]/60 shrink-0" />
                    <span className="text-sm text-white/70 font-mono flex-1">{item.name}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs text-green-400/70 font-mono">Connected</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup 3: Scheduled Workflows */}
            <div className="rounded-xl border border-white/10 bg-[#1a1c19]/5 backdrop-blur p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-[#a1d494]/50 font-mono">Workflows</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Weekly pipeline review", trigger: "Mon 9am", icon: Calendar },
                  { name: "Customer follow-up drafts", trigger: "Daily 8am", icon: Clock },
                  { name: "Meeting prep briefs", trigger: "30m before", icon: Workflow },
                  { name: "Slack digest summary", trigger: "Fri 4pm", icon: MessageSquare },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 rounded-lg bg-[#1a1c19]/5 border border-white/5 px-3 py-2">
                    <item.icon className="h-4 w-4 text-[#a1d494]/60 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/70 font-mono truncate">{item.name}</p>
                    </div>
                    <span className="text-xs text-[#a1d494]/50 font-mono shrink-0">{item.trigger}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT'S INCLUDED                                              */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1a1c19" }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#e3e3dd" }}>
              What&apos;s included.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c2c9bb" }}>
              Everything you need to go from &ldquo;we have AI seats&rdquo; to &ldquo;AI is how we work.&rdquo;
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 rounded-lg bg-[#121411]/50 border border-[#42493e]/15 opacity-0 animate-reveal stagger-${Math.min(i + 1, 6)}`}
              >
                <div className="w-6 h-6 rounded-full bg-[#bcf1ae]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#bcf1ae]" />
                </div>
                <span className="text-base leading-relaxed" style={{ color: "#e3e3dd" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHO THIS IS FOR / NOT FOR                                    */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#121411" }}>
        <div className="absolute inset-0 grain z-0" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Is this right for you?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Good fit */}
            <div>
              <h3 className="text-lg font-bold text-[#bcf1ae] mb-6">This is for you if...</h3>
              <div className="space-y-4">
                {goodFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#bcf1ae]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[#bcf1ae]" />
                    </div>
                    <span className="text-base leading-relaxed" style={{ color: "#e3e3dd" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not a fit */}
            <div>
              <h3 className="text-lg font-bold text-[#8c9387] mb-6">This probably isn&apos;t for you if...</h3>
              <div className="space-y-4">
                {notFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-[#8c9387]/60 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-base leading-relaxed block" style={{ color: "#8c9387" }}>{item.text}</span>
                      <Link href={item.link} className="text-sm text-[#a1d494]/60 hover:text-[#bcf1ae] transition-colors">
                        {item.linkLabel} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1a1c19" }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#e3e3dd" }}>
              Questions.
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#42493e]/15">
                <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline" style={{ color: "#e3e3dd" }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed pb-5" style={{ color: "#c2c9bb" }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            Your team is 2-4 weeks away from actually using AI.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-[#bcf1ae]/80">
            Tell us about your team and we&apos;ll show you exactly what the engagement looks like.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 font-medium bg-[#1a1c19] hover:bg-[#292b27] text-[#bcf1ae] shadow-lg group"
            >
              <Link href="/get-started" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
