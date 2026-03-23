import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  Users,
  Code,
  Search,
  Brain,
  Phone,
  Layout,
  Clock,
  TrendingUp,
  Rocket,
  GraduationCap,
  Shield,
  DollarSign,
  Briefcase,
  Building2,
  Sparkles,
} from "lucide-react"
import LeadForm from "@/components/lead-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121411]">

      {/* ================================================================ */}
      {/* HERO — Cinematic, full-viewport, from stitch                     */}
      {/* ================================================================ */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Futuristic infrastructure integrated with natural growth"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg5ehEnUil-44RGTaZGksWAc3NockrQrLTQr1j3QE1OBZ3el_hdgPiHjDCUSzBVW2Ehk2n92c_4Cmc-WeBo2glfkuicERjmWrbaYi7f3uLTU4H_9Z8JiQjcBYlhYaZvA-gjy4d3Yz7F0QcRJ0uZCtgr3P5rZ7_0Zt0VEMYvNp4ceXlxU8T-kePMwpuG3WM2HetT6XvKhdp2Xe8qd_rp0P75f7V2ECPoHQpfxiCpoMLHCmc3VZU_dOSUa1uJbdEnoS0zH6RXkUkHl0"
          />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>

        {/* Hero content — left aligned, asymmetric */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-[#292b27] text-[#bcf1ae] text-xs font-bold tracking-[0.25em] uppercase rounded-full mb-8 opacity-0 animate-reveal">
              Architectural Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-[#e3e3dd] leading-[0.9] mb-8 opacity-0 animate-reveal stagger-1">
              Begin Your AI{" "}
              <span className="text-gradient">Evolution</span>
            </h1>
            <p className="text-xl text-[#c2c9bb] font-body leading-relaxed mb-10 max-w-lg opacity-0 animate-reveal stagger-2">
              Premium AI consulting for modern businesses. We build the technical infrastructure that powers sustainable intelligence systems.
            </p>
            <div className="opacity-0 animate-reveal stagger-3">
              <Link
                href="#services"
                className="inline-flex items-center bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] font-bold px-8 py-4 rounded-md shadow-lg shadow-[#bcf1ae]/10 hover:opacity-90 transition-opacity group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/* SERVICE TIER CARDS — 3 cards from stitch                         */}
      {/* ================================================================ */}
      <section id="services" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl font-display font-bold text-[#e3e3dd] mb-4">Strategic Packages</h2>
          <p className="text-[#c2c9bb] max-w-xl">A curated suite of technical strategies designed for precision, scalability, and institutional growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tech Basics */}
          <div className="bg-[#0a1f0a] p-10 rounded-xl flex flex-col justify-between group hover:scale-[1.01] transition-all duration-500" style={{border: "1px solid rgba(27,59,27,0.3)"}}>
            <div>
              <div className="flex justify-center mb-10">
                <span className="px-8 py-2.5 bg-[#1b3b1b] text-[#bcf1ae] text-[12px] font-extrabold tracking-[0.25em] uppercase rounded-full" style={{border: "1px solid rgba(188,241,174,0.2)"}}>
                  Minimum Package
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#e3e3dd] mb-4">Tech Basics</h3>
              <p className="text-[#c2c9bb] leading-relaxed opacity-90">
                Fundamental tech infrastructure for your business. Website, phone, texting, CRM, invoicing — all in one platform.
              </p>
            </div>
            <div className="mt-12">
              <div className="text-3xl font-display font-bold text-[#bcf1ae] mb-6">
                $300<span className="text-sm font-medium text-[#c2c9bb]">/mo</span>
              </div>
              <Link
                href="/get-started"
                className="block w-full py-4 bg-[#bcf1ae] text-[#0b390a] rounded-md text-xs font-bold uppercase tracking-widest text-center hover:brightness-110 transition-all"
              >
                Get the Basics
              </Link>
            </div>
          </div>

          {/* AI Transformation */}
          <div className="bg-[#3b6934] p-10 rounded-xl flex flex-col justify-between group hover:scale-[1.01] transition-all duration-500" style={{border: "1px solid rgba(188,241,174,0.2)"}}>
            <div>
              <div className="flex justify-center mb-10">
                <span className="px-8 py-2.5 bg-[#bcf1ae] text-[#0b390a] text-[12px] font-extrabold tracking-[0.25em] uppercase rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">AI Transformation</h3>
              <p className="text-white/90 leading-relaxed">
                Enterprise-wide AI adoption — platform setup, custom workflows, team training, and managed AI infrastructure.
              </p>
            </div>
            <div className="mt-12">
              <div className="text-3xl font-display font-bold text-white mb-6">From $3,000</div>
              <Link
                href="/get-started"
                className="block w-full py-4 bg-white text-[#3b6934] rounded-md text-xs font-bold uppercase tracking-widest text-center hover:bg-opacity-90 transition-all"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>

          {/* AI Engineering */}
          <div className="bg-[#bcf1ae] p-10 rounded-xl flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500">
            <div>
              <div className="flex justify-center mb-10">
                <span className="px-8 py-2.5 bg-black/10 text-[#0b390a] text-[12px] font-extrabold tracking-[0.25em] uppercase rounded-full" style={{border: "1px solid rgba(0,0,0,0.1)"}}>
                  Enterprise
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0b390a] mb-4">AI Engineering</h3>
              <p className="text-[#0b390a]/80 leading-relaxed font-medium">
                Fractional engineering and custom development. AI-native teams that ship 3x faster than traditional agencies.
              </p>
            </div>
            <div className="mt-12">
              <div className="text-3xl font-display font-bold text-[#0b390a] mb-6">
                Starting $6,000<span className="text-sm font-medium text-[#0b390a]/60">/mo</span>
              </div>
              <Link
                href="/get-started"
                className="block w-full py-4 bg-[#0b390a] text-white rounded-md text-xs font-bold uppercase tracking-widest text-center hover:brightness-125 transition-all"
              >
                Leverage Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BENEFITS / OUTCOMES                                              */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#121411]">
        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#e3e3dd]">
              Results you can measure.
            </h2>
            <div className="w-16 h-0.5 bg-[#bcf1ae] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS — QUICK PROCESS                                     */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#121411]">
        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#e3e3dd]">
              How every engagement starts.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#c2c9bb]">
              Whether you need transformation, engineering, or both — the first step is the same.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#bcf1ae]/30 via-[#bcf1ae]/30 to-[#bcf1ae]/30" />

            {[
              { num: "01", title: "Call", desc: "30-minute conversation about your business, your tools, and what you're trying to accomplish." },
              { num: "02", title: "Scope", desc: "We come back within 48 hours with a specific proposal — what we'll do, what it costs, and what you'll get." },
              { num: "03", title: "Build", desc: "We start executing. Platform setup, workflow builds, or sprint development — depending on what you need." },
              { num: "04", title: "Ship", desc: "Real deliverables, documented and measured. Training, working software, or live agents — not a PowerPoint." },
            ].map((step, i) => (
              <div key={step.num} className={`text-center relative opacity-0 animate-reveal stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] font-display font-bold text-lg mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#e3e3dd]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#c2c9bb]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SERVICE DEEP-DIVES                                               */}
      {/* ================================================================ */}
      <section className="py-20 px-4 bg-[#0d0f0c]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#e3e3dd]">
              Built for every stage of AI adoption.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#c2c9bb]">
              From tech foundation to full-scale engineering — pick what you need.
            </p>
          </div>

          <div className="space-y-8">

            {/* ── Fundamentals Showcase ── */}
            <div className="rounded-2xl overflow-hidden relative" style={{background: "linear-gradient(135deg, #1a2e1a 0%, #121411 100%)"}}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#bcf1ae]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-[#bcf1ae]/15 p-3" style={{border: "1px solid rgba(188,241,174,0.15)"}}>
                      <Layout className="h-8 w-8 text-[#bcf1ae]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#e3e3dd]">Fundamentals</h3>
                      <p className="text-[#a1d494] text-sm">Everything your business needs to run.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-[#e3e3dd]">
                    Most businesses we work with are losing $5-10K/month in leads they never follow up on. We fix that first.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      { icon: Phone, label: "Business Phone", detail: "Missed-call text-back" },
                      { icon: Layout, label: "Modern Website", detail: "Built to convert" },
                      { icon: Brain, label: "CRM Platform", detail: "All contacts in one place" },
                      { icon: Sparkles, label: "Automations", detail: "Follow-ups on autopilot" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2.5 rounded-lg bg-[#bcf1ae]/8 px-3 py-2.5" style={{border: "1px solid rgba(188,241,174,0.08)"}}>
                        <item.icon className="h-4 w-4 text-[#bcf1ae] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-[#e3e3dd] leading-tight">{item.label}</p>
                          <p className="text-xs text-[#a1d494]/60">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] font-medium transition-opacity hover:opacity-90 shadow-lg shadow-[#bcf1ae]/10 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: CRM dashboard mockup */}
                <div className="hidden md:block">
                  <div className="rounded-xl bg-[#0d0f0c] p-5 shadow-2xl" style={{border: "1px solid rgba(66,73,62,0.15)"}}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#bcf1ae]/60" />
                      <span className="ml-2 text-xs text-[#8c9387] font-mono">Business Dashboard</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { name: "Website — Lead Capture", metric: "32 leads/wk", color: "bg-[#bcf1ae]" },
                        { name: "Phone — Missed-Call Text-Back", metric: "97% response rate", color: "bg-[#bcf1ae]" },
                        { name: "CRM — Pipeline Management", metric: "142 contacts", color: "bg-[#bcf1ae]" },
                        { name: "Invoicing — Automated Billing", metric: "$18k collected", color: "bg-[#bcf1ae]" },
                      ].map((agent) => (
                        <div key={agent.name} className="flex items-center justify-between rounded-lg bg-[#1a1c19]/50 px-4 py-3" style={{border: "1px solid rgba(66,73,62,0.15)"}}>
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${agent.color}`} />
                            <span className="text-sm text-[#c2c9bb] font-mono">{agent.name}</span>
                          </div>
                          <span className="text-xs text-[#8c9387] font-mono">{agent.metric}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 flex items-center justify-between" style={{borderTop: "1px solid rgba(66,73,62,0.15)"}}>
                      <span className="text-xs text-[#8c9387] font-mono">All systems connected</span>
                      <span className="text-xs text-[#bcf1ae] font-mono">$0 leads lost</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Strategy Showcase ── */}
            <div className="rounded-2xl overflow-hidden" style={{background: "linear-gradient(135deg, #3b6934 0%, #24501f 50%, #1a3a18 100%)"}}>
              <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-white/10 p-3" style={{border: "1px solid rgba(255,255,255,0.1)"}}>
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Strategy</h3>
                      <p className="text-[#bcf1ae]/80 text-sm">Your AI roadmap, backed by real numbers.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-white/90">
                    We audit your operations, find the highest-value AI opportunities, and give you a plan ranked by ROI.
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#bcf1ae]/50 font-semibold mb-3">What you walk away with</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI Readiness Score", "Opportunity Matrix", "ROI Estimates", "Implementation Roadmap"].map((item) => (
                        <span key={item} className="text-sm font-medium bg-white/15 text-white px-3 py-1.5 rounded-full" style={{border: "1px solid rgba(255,255,255,0.1)"}}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-white hover:bg-[#bcf1ae] text-[#3b6934] font-medium transition-colors shadow-lg group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: AI Opportunity Matrix mockup */}
                <div className="hidden md:block">
                  <div className="rounded-xl bg-white/5 backdrop-blur p-5 shadow-2xl" style={{border: "1px solid rgba(255,255,255,0.1)"}}>
                    <p className="text-sm font-semibold text-white mb-4">AI Opportunity Matrix</p>
                    <div className="space-y-2.5">
                      {[
                        { label: "Customer follow-up automation", roi: "$8,200/mo", done: true },
                        { label: "AI-guided sales conversations", roi: "$5,400/mo", done: true },
                        { label: "Automated data entry", roi: "$3,100/mo", done: true },
                        { label: "Internal knowledge base", roi: "$2,800/mo", done: false },
                        { label: "Custom reporting dashboard", roi: "$1,900/mo", done: false },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3" style={{border: "1px solid rgba(255,255,255,0.05)"}}>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-[#bcf1ae]/20" : "bg-white/10"}`}>
                            {item.done ? (
                              <Check className="h-3 w-3 text-[#bcf1ae]" />
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-[#a1d494] animate-pulse" />
                            )}
                          </div>
                          <span className="text-sm text-white/80 flex-1">{item.label}</span>
                          <span className="text-xs text-[#bcf1ae] font-mono">{item.roi}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 flex items-center justify-between" style={{borderTop: "1px solid rgba(255,255,255,0.1)"}}>
                      <span className="text-xs text-white/50">5 opportunities identified</span>
                      <span className="text-xs text-[#bcf1ae]/70 font-mono">$21,400/mo total ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Transformation Showcase ── */}
            <div className="rounded-2xl overflow-hidden relative" style={{background: "linear-gradient(135deg, #1a2e1a 0%, #121411 100%)"}}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#bcf1ae]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-[#bcf1ae]/15 p-3" style={{border: "1px solid rgba(188,241,174,0.15)"}}>
                      <Users className="h-8 w-8 text-[#bcf1ae]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#e3e3dd]">Transformation</h3>
                      <p className="text-[#a1d494] text-sm">From AI-curious to AI-native.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-[#e3e3dd]">
                    We set up the platforms, build the workflows, create role-specific prompt libraries, and train your team until they&apos;re self-sufficient.
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#8c9387] font-semibold mb-3">We set up & train your team on</p>
                    <div className="flex flex-wrap gap-2">
                      {["Anthropic Claude", "OpenAI ChatGPT", "Google Gemini", "Microsoft Copilot", "Cursor", "Custom Agents"].map((platform) => (
                        <span key={platform} className="text-sm font-medium bg-[#bcf1ae]/10 text-[#c2c9bb] px-3 py-1.5 rounded-full" style={{border: "1px solid rgba(188,241,174,0.08)"}}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] font-medium transition-opacity hover:opacity-90 shadow-lg shadow-[#bcf1ae]/10 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: Platform setup checklist */}
                <div className="hidden md:block">
                  <div className="rounded-xl bg-[#0d0f0c] p-5 shadow-2xl" style={{border: "1px solid rgba(66,73,62,0.15)"}}>
                    <p className="text-sm font-semibold text-[#e3e3dd] mb-4">Platform Setup Progress</p>
                    <div className="space-y-2.5">
                      {[
                        { label: "Anthropic Claude — Enterprise workspace", done: true },
                        { label: "OpenAI ChatGPT — Team accounts provisioned", done: true },
                        { label: "Google Gemini — API keys configured", done: true },
                        { label: "Microsoft Copilot — M365 integration", done: true },
                        { label: "Custom prompt library — 24 role-based packs", done: true },
                        { label: "Team training sessions — 3 of 4 complete", done: false },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3 rounded-lg bg-[#1a1c19]/30 px-4 py-3" style={{border: "1px solid rgba(66,73,62,0.1)"}}>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-[#bcf1ae]/20" : "bg-[#a1d494]/15"}`}>
                            {item.done ? (
                              <Check className="h-3 w-3 text-[#bcf1ae]" />
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-[#a1d494] animate-pulse" />
                            )}
                          </div>
                          <span className="text-sm text-[#8c9387] font-mono">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 flex items-center justify-between" style={{borderTop: "1px solid rgba(66,73,62,0.15)"}}>
                      <span className="text-xs text-[#8c9387] font-mono">5 of 6 tasks complete</span>
                      <span className="text-xs text-[#bcf1ae] font-mono">Est. 2 days remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Engineering Showcase ── */}
            <div className="rounded-2xl overflow-hidden relative" style={{background: "linear-gradient(135deg, #1a1c19 0%, #121411 100%)"}}>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#bcf1ae]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-[#bcf1ae]/10 p-3" style={{border: "1px solid rgba(188,241,174,0.1)"}}>
                      <Code className="h-8 w-8 text-[#bcf1ae]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#e3e3dd]">Engineering</h3>
                      <p className="text-[#a1d494] text-sm">Your AI engineering team — without the headcount.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-[#e3e3dd]">
                    Submit tickets, we build them. Custom AI tools, internal software, and automations — delivered in weekly sprints.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { hours: "10", price: "$6k", label: "hrs/week" },
                      { hours: "20", price: "$12k", label: "hrs/week" },
                      { hours: "40", price: "$24k", label: "hrs/week" },
                    ].map((plan) => (
                      <div key={plan.hours} className="rounded-lg bg-[#bcf1ae]/8 p-3 text-center" style={{border: "1px solid rgba(188,241,174,0.08)"}}>
                        <p className="text-2xl font-bold text-[#e3e3dd]">{plan.hours}</p>
                        <p className="text-xs text-[#8c9387]">{plan.label}</p>
                        <p className="text-sm font-semibold text-[#bcf1ae] mt-1">{plan.price}/mo</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] font-medium transition-opacity hover:opacity-90 shadow-lg shadow-[#bcf1ae]/10 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: Sprint board mockup */}
                <div className="hidden md:block">
                  <div className="rounded-xl bg-[#0d0f0c] p-5 shadow-2xl" style={{border: "1px solid rgba(66,73,62,0.1)"}}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#bcf1ae]/60" />
                      <span className="ml-2 text-xs text-[#8c9387] font-mono">Sprint Board — Acme Corp</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-[#8c9387] uppercase tracking-wide mb-2">To Do</p>
                        <div className="space-y-2">
                          {["API v2 endpoints", "Mobile responsive"].map((t) => (
                            <div key={t} className="rounded bg-[#1a1c19]/80 p-2.5" style={{border: "1px solid rgba(66,73,62,0.15)"}}>
                              <p className="text-xs text-[#c2c9bb]">{t}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#bcf1ae] uppercase tracking-wide mb-2">In Progress</p>
                        <div className="space-y-2">
                          {["Auth system", "Dashboard UI", "Webhook integration"].map((t) => (
                            <div key={t} className="rounded bg-[#bcf1ae]/8 p-2.5" style={{border: "1px solid rgba(188,241,174,0.15)"}}>
                              <p className="text-xs text-[#bcf1ae]">{t}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#a1d494] uppercase tracking-wide mb-2">Done</p>
                        <div className="space-y-2">
                          {["DB schema", "CI/CD pipeline", "User roles", "Stripe billing"].map((t) => (
                            <div key={t} className="rounded bg-[#a1d494]/8 p-2.5" style={{border: "1px solid rgba(161,212,148,0.1)"}}>
                              <p className="text-xs text-[#a1d494]/70">{t}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 flex items-center justify-between" style={{borderTop: "1px solid rgba(66,73,62,0.15)"}}>
                      <span className="text-xs text-[#8c9387] font-mono">Sprint 4 of 6</span>
                      <span className="text-xs text-[#bcf1ae] font-mono">$150/hr — 20 hrs/wk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* USE CASES                                                        */}
      {/* ================================================================ */}
      <section className="py-20 px-4 bg-[#1a1c19]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#e3e3dd]">
              Real problems we solve.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#c2c9bb]">
              AI agents, automation, training, and custom tools — framed around the problems that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Automate Customer Follow-Up", desc: "Never lose a lead to a missed call or forgotten reminder again." },
              { icon: TrendingUp, title: "Close More Sales", desc: "AI-guided conversations that help your team recommend the right services." },
              { icon: Brain, title: "Eliminate Manual Data Entry", desc: "Stop your team from spending hours on paperwork AI can handle in seconds." },
              { icon: GraduationCap, title: "Train Your Team on AI", desc: "Customized workshops that make your whole team productive with AI tools." },
              { icon: Sparkles, title: "Build Custom AI Agents", desc: "Autonomous agents that handle calls, emails, scheduling, and follow-ups 24/7." },
              { icon: Layout, title: "Modernize Your Tech Stack", desc: "Replace 5 disconnected tools with one platform that actually works together." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1e201d] rounded-xl p-6 hover:bg-[#292b27] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#292b27] flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-[#bcf1ae]" />
                </div>
                <h3 className="font-bold mb-2 text-[#e3e3dd]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#c2c9bb]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/use-cases"
              className="inline-flex items-center font-medium text-[#bcf1ae] group text-lg"
            >
              Explore all use cases
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHO WE WORK WITH                                                 */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#121411]">
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#e3e3dd]">
            Built for modern businesses ready to evolve.
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-[#c2c9bb]">
            We work with SMB and mid-market businesses across all verticals. If your team is ready to work smarter, we&apos;re your partner.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: Building2, label: "Digital-Native Businesses" },
              { icon: Briefcase, label: "Professional Services" },
              { icon: TrendingUp, label: "Growth-Stage Companies" },
              { icon: Users, label: "Mid-Market Teams" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1c19]/50" style={{border: "1px solid rgba(188,241,174,0.15)"}}>
                <item.icon className="h-4 w-4 text-[#bcf1ae]" />
                <span className="text-sm font-medium text-[#e3e3dd]">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Claude", "ChatGPT", "Gemini", "Microsoft Copilot", "Cursor", "n8n", "Make", "Zapier"].map((name) => (
              <span key={name} className="text-sm font-medium px-4 py-2 rounded-full text-[#c2c9bb] bg-[#1a1c19]/50" style={{border: "1px solid rgba(66,73,62,0.15)"}}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SOCIAL PROOF                                                     */}
      {/* ================================================================ */}
      <section className="py-16 px-4 bg-[#0d0f0c]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
            {[
              { q: "What size business do you work with?", a: "SMB and mid-market businesses across all verticals. We work with growing companies that want to scale with AI — not just talk about it." },
              { q: "How is this different from hiring an AI consultant?", a: "Most consultants advise. We build. Every engagement produces a working system, a trained team, or shipped code." },
              { q: "What if I don't know where to start?", a: "That's what the Strategy engagement is for. We assess your operations, find the highest-ROI opportunities, and give you a plan." },
              { q: "How fast can you deliver?", a: "Strategy audits in 30 days. Platform setup in 2 weeks. Custom engineering sprints in 1-2 week cycles." },
              { q: "Do I own everything you build?", a: "Yes. Code, documentation, workflows, prompt libraries — it's all yours. We build for handoff, not dependency." },
              { q: "How does pricing work?", a: "Tech Basics from $300/mo. Strategy Audit $5,000. AI Transformation from $3,000. Engineering from $6,000/mo. Every project is scoped to your needs." },
            ].map((faq, i) => (
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
