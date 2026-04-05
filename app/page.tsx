import Link from "next/link"
import {
  ArrowRight,
  Check,
  XCircle,
  Clock,
  TrendingUp,
  Rocket,
  GraduationCap,
  Shield,
  DollarSign,
  Search,
  Code,
  Mail,
  MessageSquare,
  FolderOpen,
  Database,
  Calendar,
  Workflow,
} from "lucide-react"
import LeadForm from "@/components/lead-form"

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const deliverables = [
  "Platform selection and full workspace setup (accounts, SSO, security)",
  "Role-based access controls and governance policies",
  "Connector integrations — Gmail, Slack, Drive, CRM, and more",
  "Role-based prompt packs for every department",
  "2-3 live team training sessions (recorded for future hires)",
  "Structured workflow templates (daily, weekly, project-based)",
  "A 'what to measure' guide so you know it's working",
  "Optional 90-day support to ensure adoption sticks",
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
  { q: "Why do you recommend Claude / Anthropic?", a: "For most business teams, Claude is the best combination of reasoning quality, safety, and enterprise features. But we're not locked in — if your team is deep in Google Workspace, Gemini might make more sense. If you need Microsoft 365 integration, Copilot could be right. We evaluate and recommend; you decide." },
  { q: "We already have ChatGPT seats. Do we need to switch?", a: "Maybe not. Sometimes the right move is to keep what you have and just connect it properly. We'll tell you honestly whether switching platforms is worth it or whether the real problem is that nobody configured the tools for your actual workflows." },
  { q: "How fast can you deliver?", a: "2-4 weeks from kickoff to fully deployed. Week 1 is selection and setup. Weeks 2-3 are integration and workflow building. Week 3-4 is training and handoff. You keep working normally the entire time." },
  { q: "Do I own everything you build?", a: "Yes. Code, documentation, workflows, prompt libraries — it's all yours. We build for handoff, not dependency." },
  { q: "What happens after the engagement?", a: "You own everything. If you want ongoing support and optimization, we offer 90-day support packages. But the engagement is designed to be complete on its own." },
  { q: "How does pricing work?", a: "AI Operating System Setup ranges from $3,000 to $10,000 depending on team size and scope. Strategy audits are $5,000. Engineering retainers start at $6,000/mo. Every project is scoped to your needs." },
]

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121411]">

      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <header id="flagship" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Futuristic infrastructure integrated with natural growth"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg5ehEnUil-44RGTaZGksWAc3NockrQrLTQr1j3QE1OBZ3el_hdgPiHjDCUSzBVW2Ehk2n92c_4Cmc-WeBo2glfkuicERjmWrbaYi7f3uLTU4H_9Z8JiQjcBYlhYaZvA-gjy4d3Yz7F0QcRJ0uZCtgr3P5rZ7_0Zt0VEMYvNp4ceXlxU8T-kePMwpuG3WM2HetT6XvKhdp2Xe8qd_rp0P75f7V2ECPoHQpfxiCpoMLHCmc3VZU_dOSUa1uJbdEnoS0zH6RXkUkHl0"
          />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-[#292b27] text-[#bcf1ae] text-xs font-bold tracking-[0.25em] uppercase rounded-full mb-8 opacity-0 animate-reveal">
              AI Implementation in 2-4 Weeks
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter text-[#e3e3dd] leading-[0.95] mb-8 opacity-0 animate-reveal stagger-1">
              We Set Up Your{" "}
              <span className="text-gradient">AI Operating System</span>
            </h1>
            <p className="text-xl text-[#c2c9bb] font-body leading-relaxed mb-6 max-w-lg opacity-0 animate-reveal stagger-2">
              Most companies have AI seats nobody uses. We set up the right platform, connect it to your tools, build real workflows, and train your team — in weeks, not months.
            </p>
            <p className="text-2xl font-bold text-[#bcf1ae] mb-1 opacity-0 animate-reveal stagger-3">$3,000 – $10,000</p>
            <p className="text-sm text-[#c2c9bb] mb-8 opacity-0 animate-reveal stagger-3">
              One-time engagement &middot; 2-4 weeks &middot; Scales with team size
            </p>
            <div className="opacity-0 animate-reveal stagger-3">
              <Link
                href="/get-started"
                className="inline-flex items-center bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] font-bold px-8 py-4 rounded-md shadow-lg shadow-[#bcf1ae]/10 hover:opacity-90 transition-opacity group"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/* WHAT YOU GET                                                      */}
      {/* ================================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1a1c19" }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#e3e3dd]">
              What you get.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#c2c9bb]">
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
                <span className="text-base leading-relaxed text-[#e3e3dd]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS                                                     */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#121411]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#e3e3dd]">
              How it works.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#c2c9bb]">
              Three steps to a working AI operating system.
            </p>
          </div>

          {/* Steps with connecting line */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#bcf1ae]/30 via-[#bcf1ae]/30 to-[#bcf1ae]/30" />

            {[
              { number: "01", title: "Choose Your AI Stack", description: "We evaluate your team, your tools, and your budget — then recommend the right enterprise AI platform. We recommend Claude for most teams, but we'll make the right call for yours." },
              { number: "02", title: "Connect It to Your Work", description: "We plug AI into your actual tools — Gmail, Slack, Drive, CRM, internal docs. AI that can't see your data is just a chatbot. AI connected to your data is a team member." },
              { number: "03", title: "Build Workflows That Run", description: "We build role-based prompts, structured templates, and scheduled workflows that actually run your processes. Not 'play around with AI' — real automation that saves real time." },
            ].map((step, i) => (
              <div key={step.number} className={`text-center relative opacity-0 animate-reveal stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#bcf1ae] text-[#0b390a] font-display font-bold text-lg mb-5 relative z-10 shadow-lg shadow-[#bcf1ae]/10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-sm text-[#c2c9bb]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Terminal mockups */}
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

      {/* ================================================================ */}
      {/* WHO THIS IS FOR / NOT FOR                                        */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#121411]">
        <div className="absolute inset-0 grain z-0" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Is this right for you?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#bcf1ae] mb-6">This is for you if...</h3>
              <div className="space-y-4">
                {goodFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#bcf1ae]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[#bcf1ae]" />
                    </div>
                    <span className="text-base leading-relaxed text-[#e3e3dd]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#8c9387] mb-6">This probably isn&apos;t for you if...</h3>
              <div className="space-y-4">
                {notFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-[#8c9387]/60 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-base leading-relaxed block text-[#8c9387]">{item.text}</span>
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

      {/* ================================================================ */}
      {/* RESULTS + SOCIAL PROOF                                           */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#121411]">
        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#e3e3dd]">
              Results you can measure.
            </h2>
            <div className="w-16 h-0.5 bg-[#bcf1ae] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Clock, title: "Save 15+ hours/week", desc: "Automate the manual work that's eating your team's time." },
              { icon: TrendingUp, title: "Close 20% more conversations", desc: "AI-guided sales support that helps your team convert." },
              { icon: Rocket, title: "Deploy in weeks, not months", desc: "Working AI tools in your hands fast — not a 6-month roadmap." },
              { icon: GraduationCap, title: "Your team trained in 14 days", desc: "From AI-curious to AI-native with hands-on workshops." },
              { icon: Shield, title: "You own everything", desc: "Code, workflows, documentation — it's all yours. No lock-in." },
              { icon: DollarSign, title: "ROI before month 2", desc: "Every engagement is designed to pay for itself quickly." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`rounded-lg p-6 bg-[#1a1c19] hover:bg-[#1e201d] transition-colors opacity-0 animate-reveal stagger-${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#bcf1ae]/15 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-[#bcf1ae]" />
                </div>
                <h3 className="text-lg font-bold text-[#e3e3dd] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#c2c9bb]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-[#42493e]/15 pt-12">
            {[
              { value: "3x", label: "Faster delivery than traditional agencies" },
              { value: "5+", label: "Years in AI-native engineering" },
              { value: "100%", label: "Client code ownership — no lock-in, ever" },
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <p className="text-3xl font-bold text-[#bcf1ae] mb-2">{stat.value}</p>
                <p className="text-sm text-[#c2c9bb]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECONDARY SERVICES                                               */}
      {/* ================================================================ */}
      <section className="py-20 px-4 bg-[#0d0f0c]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#e3e3dd]">
              Need something else?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#c2c9bb]">
              AI Operating System Setup is where most teams start. These are available when you need to go deeper.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategy Card */}
            <div className="rounded-2xl overflow-hidden" style={{background: "linear-gradient(135deg, #3b6934 0%, #24501f 50%, #1a3a18 100%)"}}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-white/10 p-3" style={{border: "1px solid rgba(255,255,255,0.1)"}}>
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI Strategy</h3>
                    <p className="text-[#bcf1ae]/80 text-sm">Know exactly where AI fits.</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed mb-4 text-white/90">
                  A 30-day assessment that maps every AI opportunity, estimates ROI, and gives you a concrete implementation plan. Start here if you&apos;re not sure where AI fits.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Vendor Evaluation", "Workflow Mapping", "ROI Estimates", "Rollout Plan"].map((item) => (
                    <span key={item} className="text-xs font-medium bg-white/15 text-white px-3 py-1.5 rounded-full" style={{border: "1px solid rgba(255,255,255,0.1)"}}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">$5,000</span>
                  <Link
                    href="/strategy"
                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white hover:bg-[#bcf1ae] text-[#3b6934] text-sm font-medium transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Engineering Card */}
            <div className="rounded-2xl overflow-hidden relative" style={{background: "linear-gradient(135deg, #1a1c19 0%, #121411 100%)"}}>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#bcf1ae]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-[#bcf1ae]/10 p-3" style={{border: "1px solid rgba(188,241,174,0.1)"}}>
                    <Code className="h-6 w-6 text-[#bcf1ae]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#e3e3dd]">AI Engineering</h3>
                    <p className="text-[#a1d494] text-sm">Your AI engineering team.</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed mb-4 text-[#e3e3dd]">
                  Embedded build capacity for custom workflows, automations, internal tools, and product features. For teams that need ongoing engineering after their AI stack is set up.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Custom Workflows", "Internal Tools", "API Integrations", "AI/ML Features"].map((item) => (
                    <span key={item} className="text-xs font-medium bg-[#bcf1ae]/10 text-[#c2c9bb] px-3 py-1.5 rounded-full" style={{border: "1px solid rgba(188,241,174,0.08)"}}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#bcf1ae]">From $6,000/mo</span>
                  <Link
                    href="/engineering"
                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] text-sm font-medium transition-opacity hover:opacity-90 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ                                                              */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#121411]">
        <div className="container relative z-10 mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#e3e3dd]">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg overflow-hidden bg-[#1a1c19]">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[#e3e3dd] font-medium text-base hover:text-[#bcf1ae] transition-colors">
                  {faq.q}
                  <span className="text-[#bcf1ae] ml-4 shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-base leading-relaxed text-[#c2c9bb]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA FORM                                                         */}
      {/* ================================================================ */}
      <LeadForm />
    </main>
  )
}
