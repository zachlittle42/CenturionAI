import Link from "next/link"
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
  Stethoscope,
  Briefcase,
  Building2,
  Sparkles,
} from "lucide-react"
import LeadForm from "@/components/lead-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            AI that pays for <span className="text-blue-400">itself.</span>
          </h1>

          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{color: "#94A3B8"}}>
            Strategy, training, and custom AI tools for healthcare practices and service businesses doing $50K+/month.
          </p>

          <div className="flex items-center justify-center opacity-0 animate-reveal stagger-3">
            <Link href="/get-started" className="inline-flex items-center text-base px-8 py-3 font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md shadow-lg shadow-blue-500/20 transition-colors group cursor-pointer">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/* OUR APPROACH — TABBED CARDS                                      */}
      {/* ================================================================ */}
      <section className="py-20 px-4" style={{backgroundColor: "#F8FAFC"}}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              What we do.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#64748B"}}>
              Four ways to work with us — a natural progression from foundation to scale.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["Fundamentals", "Strategy", "Transformation", "Engineering"].map((tab, i) => (
              <span key={tab} className="px-4 py-1.5 rounded-full text-sm font-semibold bg-slate-100 border border-slate-200/60 relative" style={{color: "#475569"}}>
                {tab}
                {i < 3 && <span className="hidden md:inline text-slate-300 ml-3">&rarr;</span>}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fundamentals */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 hover:shadow-lg hover:border-blue-200 transition-all relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">Start Here</span>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="rounded-lg bg-blue-50 p-3 shrink-0">
                  <Layout className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold" style={{color: "#0F172A"}}>Fundamentals</h3>
              </div>
              <p className="text-blue-500 font-medium mb-1">Get the basics right first</p>
              <p className="mb-4 text-sm leading-relaxed" style={{color: "#64748B"}}>
                Stop losing leads to missed calls and broken forms. We build the tech foundation your business needs before AI can do its job.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Modern website built to convert",
                  "Business phone + missed-call text-back",
                  "CRM, invoicing, and booking in one platform",
                  "From $297/mo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm" style={{color: "#64748B"}}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors shadow-md shadow-blue-500/20 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Strategy */}
            <div className="bg-blue-600 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-blue-500/20 relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-sm font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">Most Popular</span>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="rounded-lg bg-blue-500/30 p-3 shrink-0">
                  <Search className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Strategy</h3>
              </div>
              <p className="text-blue-200 font-medium mb-1">Know exactly where AI fits — and what it&apos;s worth</p>
              <p className="mb-4 text-sm leading-relaxed text-blue-100/80">
                Walk away with a ranked list of AI opportunities and the dollar value of each one. Not a 200-slide deck. A concrete plan you can act on.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "AI readiness assessment across your operations",
                  "Prioritized opportunity matrix with ROI estimates",
                  "Implementation roadmap: what to do first, second, third",
                  "Starting at $1,500",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-200 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-white hover:bg-blue-50 text-blue-600 font-medium transition-colors shadow-md group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Transformation */}
            <div className="rounded-2xl border p-8 transition-all hover:shadow-lg relative" style={{backgroundColor: "#1E293B", borderColor: "rgba(96,165,250,0.15)"}}>
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-400 text-slate-900 text-sm font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">Most Valuable</span>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="rounded-lg p-3 shrink-0" style={{backgroundColor: "#0F172A"}}>
                  <Users className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Transformation</h3>
              </div>
              <p className="text-blue-400 font-medium mb-1">Make your team AI-powered in 2 weeks</p>
              <p className="mb-4 text-sm leading-relaxed" style={{color: "#94A3B8"}}>
                We set up the platforms, build the workflows, train your people, and make sure it sticks. Your team goes from &apos;what is AI?&apos; to using it every day.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Platform setup + configuration",
                  "Custom workflows and automation",
                  "Hands-on team training",
                  "From $3,000",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm" style={{color: "#94A3B8"}}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors shadow-md shadow-blue-500/20 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Engineering */}
            <div className="rounded-2xl border p-8 transition-all hover:shadow-lg relative" style={{backgroundColor: "#1E293B", borderColor: "rgba(96,165,250,0.15)"}}>
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">For Ongoing Builds</span>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="rounded-lg p-3 shrink-0" style={{backgroundColor: "#0F172A"}}>
                  <Code className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Engineering</h3>
              </div>
              <p className="text-blue-400 font-medium mb-1">Ship in weeks what would take months</p>
              <p className="mb-4 text-sm leading-relaxed" style={{color: "#94A3B8"}}>
                AI-augmented engineering teams that build 3x faster than traditional agencies. Custom tools, agents, and software — you own everything.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Custom AI agents and internal tools",
                  "Full-stack apps, APIs, data pipelines",
                  "Weekly sprints, real deliverables",
                  "From $6,000/mo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm" style={{color: "#94A3B8"}}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors shadow-md shadow-blue-500/20 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BENEFITS / OUTCOMES                                              */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Results you can measure.
            </h2>
            <div className="w-16 h-0.5 bg-blue-400 mx-auto" />
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
                className={`rounded-lg p-6 border hover:border-blue-500/20 transition-colors opacity-0 animate-reveal stagger-${i + 1}`}
                style={{backgroundColor: "#1E293B", borderColor: "rgba(148,163,184,0.1)"}}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: "#94A3B8"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS — QUICK PROCESS                                     */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              How every engagement starts.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#94A3B8"}}>
              Whether you need transformation, engineering, or both — the first step is the same.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-400/30 via-blue-400/30 to-blue-400/30" />

            {[
              { num: "01", title: "Call", desc: "30-minute conversation about your business, your tools, and what you're trying to accomplish." },
              { num: "02", title: "Scope", desc: "We come back within 48 hours with a specific proposal — what we'll do, what it costs, and what you'll get." },
              { num: "03", title: "Build", desc: "We start executing. Platform setup, workflow builds, or sprint development — depending on what you need." },
              { num: "04", title: "Ship", desc: "Real deliverables, documented and measured. Training, working software, or live agents — not a PowerPoint." },
            ].map((step, i) => (
              <div key={step.num} className={`text-center relative opacity-0 animate-reveal stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white font-display font-bold text-lg mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: "#94A3B8"}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SERVICE DEEP-DIVES                                               */}
      {/* ================================================================ */}
      <section className="py-20 px-4" style={{backgroundColor: "#0B1120"}}>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Built for every stage of AI adoption.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#94A3B8"}}>
              From tech foundation to full-scale engineering — pick what you need.
            </p>
          </div>

          <div className="space-y-8">

            {/* ── Fundamentals Showcase ── */}
            <div className="rounded-2xl overflow-hidden relative" style={{background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)"}}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-blue-500/20 p-3 border border-blue-400/20">
                      <Layout className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Fundamentals</h3>
                      <p className="text-blue-300 text-sm">Everything your business needs to run.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6" style={{color: "#CBD5E1"}}>
                    Most businesses we work with are losing $5-10K/month in leads they never follow up on. We fix that first.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      { icon: Phone, label: "Business Phone", detail: "Missed-call text-back" },
                      { icon: Layout, label: "Modern Website", detail: "Built to convert" },
                      { icon: Brain, label: "CRM Platform", detail: "All contacts in one place" },
                      { icon: Sparkles, label: "Automations", detail: "Follow-ups on autopilot" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2.5 rounded-lg bg-blue-500/10 border border-blue-400/10 px-3 py-2.5">
                        <item.icon className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white leading-tight">{item.label}</p>
                          <p className="text-xs text-blue-300/60">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors shadow-lg shadow-blue-500/25 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: CRM dashboard mockup */}
                <div className="hidden md:block">
                  <div className="rounded-xl border border-blue-400/15 bg-[#0B1222] p-5 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      <span className="ml-2 text-xs text-slate-500 font-mono">Business Dashboard</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { name: "Website — Lead Capture", status: "Active", metric: "32 leads/wk", color: "bg-green-400" },
                        { name: "Phone — Missed-Call Text-Back", status: "Active", metric: "97% response rate", color: "bg-green-400" },
                        { name: "CRM — Pipeline Management", status: "Active", metric: "142 contacts", color: "bg-green-400" },
                        { name: "Invoicing — Automated Billing", status: "Active", metric: "$18k collected", color: "bg-green-400" },
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
                      <span className="text-xs text-slate-500 font-mono">All systems connected</span>
                      <span className="text-xs text-green-400 font-mono">$0 leads lost</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Strategy Showcase ── */}
            <div className="rounded-2xl overflow-hidden" style={{background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)"}}>
              <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-white/10 p-3 border border-white/10">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Strategy</h3>
                      <p className="text-blue-200 text-sm">Your AI roadmap, backed by real numbers.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-blue-100/90">
                    We audit your operations, find the highest-value AI opportunities, and give you a plan ranked by ROI.
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-blue-200/50 font-semibold mb-3">What you walk away with</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI Readiness Score", "Opportunity Matrix", "ROI Estimates", "Implementation Roadmap"].map((item) => (
                        <span key={item} className="text-sm font-medium bg-white/15 text-white px-3 py-1.5 rounded-full border border-white/10">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-white hover:bg-blue-50 text-blue-600 font-medium transition-colors shadow-lg group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: AI Opportunity Matrix mockup */}
                <div className="hidden md:block">
                  <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow-2xl">
                    <p className="text-sm font-semibold text-white mb-4">AI Opportunity Matrix</p>
                    <div className="space-y-2.5">
                      {[
                        { label: "Patient follow-up automation", roi: "$8,200/mo", priority: "High", done: true },
                        { label: "AI-guided sales conversations", roi: "$5,400/mo", priority: "High", done: true },
                        { label: "Automated data entry", roi: "$3,100/mo", priority: "Medium", done: true },
                        { label: "Internal knowledge base", roi: "$2,800/mo", priority: "Medium", done: false },
                        { label: "Custom reporting dashboard", roi: "$1,900/mo", priority: "Low", done: false },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/5 px-4 py-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-green-400/20" : "bg-blue-300/20"}`}>
                            {item.done ? (
                              <Check className="h-3 w-3 text-green-400" />
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                            )}
                          </div>
                          <span className="text-sm text-blue-100/80 flex-1">{item.label}</span>
                          <span className="text-xs text-green-300 font-mono">{item.roi}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-blue-200/50">5 opportunities identified</span>
                      <span className="text-xs text-green-300/70 font-mono">$21,400/mo total ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Transformation Showcase ── */}
            <div className="rounded-2xl overflow-hidden relative" style={{background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)"}}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-blue-500/20 p-3 border border-blue-400/20">
                      <Users className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Transformation</h3>
                      <p className="text-blue-300 text-sm">From AI-curious to AI-native.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6" style={{color: "#CBD5E1"}}>
                    We set up the platforms, build the workflows, create role-specific prompt libraries, and train your team until they&apos;re self-sufficient.
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">We set up & train your team on</p>
                    <div className="flex flex-wrap gap-2">
                      {["Anthropic Claude", "OpenAI ChatGPT", "Google Gemini", "Microsoft Copilot", "Cursor", "Custom Agents"].map((platform) => (
                        <span key={platform} className="text-sm font-medium bg-blue-500/15 text-slate-300 px-3 py-1.5 rounded-full border border-blue-400/10">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors shadow-lg shadow-blue-500/25 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: Platform setup checklist */}
                <div className="hidden md:block">
                  <div className="rounded-xl border border-blue-400/15 bg-[#0B1222] p-5 shadow-2xl">
                    <p className="text-sm font-semibold text-white mb-4">Platform Setup Progress</p>
                    <div className="space-y-2.5">
                      {[
                        { label: "Anthropic Claude — Enterprise workspace", done: true },
                        { label: "OpenAI ChatGPT — Team accounts provisioned", done: true },
                        { label: "Google Gemini — API keys configured", done: true },
                        { label: "Microsoft Copilot — M365 integration", done: true },
                        { label: "Custom prompt library — 24 role-based packs", done: true },
                        { label: "Team training sessions — 3 of 4 complete", done: false },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3 rounded-lg bg-slate-800/30 border border-slate-700/30 px-4 py-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-green-400/20" : "bg-blue-300/20"}`}>
                            {item.done ? (
                              <Check className="h-3 w-3 text-green-400" />
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                            )}
                          </div>
                          <span className="text-sm text-slate-400 font-mono">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-mono">5 of 6 tasks complete</span>
                      <span className="text-xs text-green-400 font-mono">Est. 2 days remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Engineering Showcase ── */}
            <div className="rounded-2xl overflow-hidden relative" style={{background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"}}>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-blue-500/15 p-3 border border-blue-400/15">
                      <Code className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Engineering</h3>
                      <p className="text-blue-300 text-sm">Your AI engineering team — without the headcount.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6" style={{color: "#CBD5E1"}}>
                    Submit tickets, we build them. Custom AI tools, internal software, and automations — delivered in weekly sprints.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { hours: "10", price: "$6k", label: "hrs/week" },
                      { hours: "20", price: "$12k", label: "hrs/week" },
                      { hours: "40", price: "$24k", label: "hrs/week" },
                    ].map((plan) => (
                      <div key={plan.hours} className="rounded-lg bg-blue-500/10 border border-blue-400/10 p-3 text-center">
                        <p className="text-2xl font-bold text-white">{plan.hours}</p>
                        <p className="text-xs text-slate-400">{plan.label}</p>
                        <p className="text-sm font-semibold text-blue-400 mt-1">{plan.price}/mo</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-7 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors shadow-lg shadow-blue-500/25 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual: Sprint board mockup */}
                <div className="hidden md:block">
                  <div className="rounded-xl border border-blue-400/10 bg-[#0B1222] p-5 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      <span className="ml-2 text-xs text-slate-500 font-mono">Sprint Board — Acme Corp</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">To Do</p>
                        <div className="space-y-2">
                          {["API v2 endpoints", "Mobile responsive"].map((t) => (
                            <div key={t} className="rounded bg-slate-800/80 border border-slate-700/50 p-2.5">
                              <p className="text-xs text-slate-300">{t}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">In Progress</p>
                        <div className="space-y-2">
                          {["Auth system", "Dashboard UI", "Webhook integration"].map((t) => (
                            <div key={t} className="rounded bg-blue-500/10 border border-blue-400/20 p-2.5">
                              <p className="text-xs text-blue-200">{t}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-2">Done</p>
                        <div className="space-y-2">
                          {["DB schema", "CI/CD pipeline", "User roles", "Stripe billing"].map((t) => (
                            <div key={t} className="rounded bg-green-500/10 border border-green-400/15 p-2.5">
                              <p className="text-xs text-green-300/70">{t}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-mono">Sprint 4 of 6</span>
                      <span className="text-xs text-blue-400 font-mono">$150/hr — 20 hrs/wk</span>
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{color: "#0F172A"}}>
              Real problems we solve.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "#64748B"}}>
              AI agents, automation, training, and custom tools — framed around the problems that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Automate Patient Follow-Up", desc: "Never lose a patient to a missed call or forgotten reminder again." },
              { icon: TrendingUp, title: "Close More In-Person Sales", desc: "AI-guided conversations that help your team recommend the right services." },
              { icon: Brain, title: "Eliminate Manual Data Entry", desc: "Stop your team from spending hours on paperwork AI can handle in seconds." },
              { icon: GraduationCap, title: "Train Your Team on AI", desc: "Customized workshops that make your whole team productive with AI tools." },
              { icon: Sparkles, title: "Build Custom AI Agents", desc: "Autonomous agents that handle calls, emails, scheduling, and follow-ups 24/7." },
              { icon: Layout, title: "Modernize Your Tech Stack", desc: "Replace 5 disconnected tools with one platform that actually works together." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-bold mb-2" style={{color: "#0F172A"}}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: "#64748B"}}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/use-cases"
              className="inline-flex items-center font-medium text-blue-500 group text-lg"
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
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            Built for healthcare, clinics, and service businesses.
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-10" style={{color: "#94A3B8"}}>
            We work with cash-pay healthcare practices, med spas, clinics, and service businesses doing $50K+/month. If your team is ready to work smarter, we&apos;re your partner.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: Stethoscope, label: "Med Spas" },
              { icon: Building2, label: "Clinics" },
              { icon: Stethoscope, label: "Weight Management" },
              { icon: Briefcase, label: "Service Businesses" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-5 py-2.5 rounded-full border" style={{borderColor: "rgba(96,165,250,0.2)", backgroundColor: "rgba(30,41,59,0.5)"}}>
                <item.icon className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Claude", "ChatGPT", "Gemini", "Microsoft Copilot", "Cursor", "n8n", "Make", "Zapier"].map((name) => (
              <span key={name} className="text-sm font-medium px-4 py-2 rounded-full border" style={{color: "#94A3B8", borderColor: "rgba(148,163,184,0.15)", backgroundColor: "rgba(30,41,59,0.5)"}}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SOCIAL PROOF                                                     */}
      {/* ================================================================ */}
      <section className="py-16 px-4" style={{backgroundColor: "#0B1120"}}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "30+", label: "Location healthcare network — currently building AI systems" },
              { value: "5+", label: "Years in healthcare technology" },
              { value: "100%", label: "Client code ownership — no lock-in, ever" },
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <p className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</p>
                <p className="text-sm" style={{color: "#94A3B8"}}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ                                                              */}
      {/* ================================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: "#0F172A"}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What size business do you work with?", a: "$50K+/month in revenue. We work with growing practices and service businesses that want to scale with AI." },
              { q: "How is this different from hiring an AI consultant?", a: "Most consultants advise. We build. Every engagement produces a working system, a trained team, or shipped code." },
              { q: "What if I don't know where to start?", a: "That's what the Strategy engagement is for. We assess your operations, find the highest-ROI opportunities, and give you a plan." },
              { q: "How fast can you deliver?", a: "Strategy audits in 30-60 days. Platform setup in 2 weeks. Custom engineering sprints in 1-2 week cycles." },
              { q: "Do I own everything you build?", a: "Yes. Code, documentation, workflows, prompt libraries — it's all yours. We build for handoff, not dependency." },
              { q: "How does pricing work?", a: "Fundamentals from $297/mo. Strategy from $1,500. Transformation from $3,000. Engineering from $6,000/mo. Every project is scoped to your needs." },
            ].map((faq, i) => (
              <details key={i} className="group rounded-lg border border-slate-700/40 overflow-hidden" style={{backgroundColor: "#1E293B"}}>
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-medium text-base hover:text-blue-400 transition-colors">
                  {faq.q}
                  <span className="text-blue-400 ml-4 shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-base leading-relaxed" style={{color: "#94A3B8"}}>
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
