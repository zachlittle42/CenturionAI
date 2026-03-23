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
  Globe,
  Phone,
  MessageSquare,
  FileText,
  Users,
  Zap,
} from "lucide-react"
import CtaBanner from "@/components/cta-banner"

export const metadata = {
  title: "Fundamentals | Verdant AI Partners",
  description:
    "Get your tech right before you get it smart. Website, phone, texting, CRM, invoicing — everything your business needs to run, in one platform.",
  alternates: {
    canonical: "https://verdantaipartners.com/fundamentals",
  },
}

const painPoints = [
  "Your website was built 5 years ago and you're embarrassed to share it",
  "Customers call and you miss it — no follow-up, no text-back",
  "You're juggling Venmo, QuickBooks, and paper invoices",
  "You know you should be texting customers but don't have a system",
  "You're paying for 4 different tools that don't talk to each other",
]

const features = [
  {
    icon: Globe,
    title: "Your Own Website",
    description:
      "Modern, mobile-friendly, built to convert. Not a template you can't edit.",
  },
  {
    icon: Phone,
    title: "Business Phone Number",
    description:
      "A dedicated line with call tracking, voicemail, and missed-call text-back. Never lose a lead again.",
  },
  {
    icon: MessageSquare,
    title: "2-Way Texting",
    description:
      "Text customers from your business number. Confirmations, follow-ups, promotions. They actually open these.",
  },
  {
    icon: FileText,
    title: "Invoicing",
    description:
      "Send invoices, collect payments, track who owes what. No more spreadsheets.",
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Every customer, every interaction, one place. Know who called, who booked, who ghosted.",
  },
  {
    icon: Zap,
    title: "Automations",
    description:
      "Missed a call? They get a text. New lead? Auto-reply in seconds. Appointment booked? Confirmation sent. It just works.",
  },
]

const pricingTiers = [
  {
    name: "Essentials",
    price: "$297",
    tagline: "For businesses that need the basics done right.",
    features: [
      "Website",
      "Business phone number",
      "2-way texting",
      "CRM",
      "Invoicing",
      "Basic automations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$497",
    tagline: "For businesses ready to grow.",
    features: [
      "Everything in Essentials",
      "Reputation management",
      "Email marketing",
      "Booking system",
      "Pipeline tracking",
      "Social media scheduler",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Growth",
    price: "$797",
    tagline: "For businesses ready to get smart.",
    features: [
      "Everything in Professional",
      "AI chat widget",
      "Advanced workflow automations",
      "Custom reporting dashboard",
      "Weekly strategy call",
      "First priority for AI Transformation upgrade",
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "What platform is this built on?",
    answer:
      "We use proven, enterprise-grade infrastructure — a combination of industry-standard tools tailored to your business. Happy to walk through the full tech stack on a call if you want the details.",
  },
  {
    question: "Can I keep my current phone number?",
    answer:
      "Yes — we can port your existing number or set up a new dedicated line.",
  },
  {
    question: "What if I outgrow this?",
    answer:
      "That's the plan. Fundamentals is designed to feed directly into our Transformation services when you're ready.",
  },
  {
    question: "Is there a contract?",
    answer: "No. Month-to-month. Cancel anytime.",
  },
  {
    question: "What's the setup process?",
    answer:
      "We build everything in 5-7 business days. One onboarding call, then we hand you the keys.",
  },
]

export default function FundamentalsPage() {
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
            <span className="text-[#a1d494] font-medium text-sm">Fundamentals</span>
          </div>

          <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            Stop losing leads to broken tech. Get the basics right.
          </h1>

          <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{ color: "#c2c9bb" }}>
            Most businesses we meet are losing $5-10K/month in leads they never follow up on.
            We fix the foundation so AI has something to build on.
          </p>

          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2" style={{ color: "#e3e3dd" }}>
            We set up the foundation — so when you&apos;re ready for AI, everything&apos;s already connected.
          </p>

          <div className="opacity-0 animate-reveal stagger-3">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 font-medium bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] shadow-lg shadow-[#bcf1ae]/10 group"
            >
              <Link href="/get-started" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROBLEM SECTION                                              */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#121411" }}>
        <div className="absolute inset-0 grain z-0" />

        <div className="container relative z-10 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Sound familiar?
            </h2>
            <div className="w-16 h-0.5 bg-[#bcf1ae] mx-auto" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto mb-12">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 bg-[#1a1c19]/5 backdrop-blur-sm p-5 rounded-lg text-left opacity-0 animate-reveal stagger-${i + 1}`}
              >
                <div className="w-2 h-2 rounded-full bg-[#bcf1ae] shrink-0 mt-2" />
                <span className="text-white text-base">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-medium text-[#bcf1ae] opacity-0 animate-reveal stagger-6">
            You don&apos;t need AI yet. You need infrastructure.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT'S INCLUDED                                              */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1a1c19" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#e3e3dd" }}>
              Everything your business needs to run. One platform.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-[#1a1c19] rounded-xl shadow-md overflow-hidden border border-[#42493e]/15 hover:shadow-lg hover:border-[#bcf1ae]/20 transition-all"
              >
                <div className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-[#bcf1ae] to-[#a1d494]" : "from-[#a1d494] to-[#bcf1ae]"}`} />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#292b27] flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#bcf1ae]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#e3e3dd" }}>
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#c2c9bb" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING CARDS                                                */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#121411" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/30 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Simple, transparent pricing.
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c2c9bb" }}>
              All plans: $500 one-time setup. Month-to-month. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl p-8 flex flex-col border transition-all ${
                  tier.popular
                    ? "bg-[#bcf1ae]/10 border-[#bcf1ae]/10 shadow-2xl shadow-[#bcf1ae]/10"
                    : "border-slate-700/40 hover:border-[#42493e]/15"
                }`}
                style={{ backgroundColor: tier.popular ? undefined : "#1a1c19" }}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center bg-[#bcf1ae] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-[#bcf1ae]/10">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6 mt-2">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#bcf1ae]">
                      {tier.price}
                    </span>
                    <span className="text-sm" style={{ color: "#c2c9bb" }}>
                      /mo
                    </span>
                  </div>
                  <p className="text-sm mt-2 italic" style={{ color: "#c2c9bb" }}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="border-t border-slate-700/40 pt-6 mb-8 flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#c2c9bb" }}
                      >
                        <Check className="h-4 w-4 text-[#bcf1ae] mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={`w-full ${
                    tier.popular
                      ? "bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] shadow-lg shadow-[#bcf1ae]/10"
                      : "bg-[#1a1c19]/50 hover:bg-slate-600/50 text-white border border-slate-600/30"
                  }`}
                >
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-sm text-center mt-8" style={{ color: "#c2c9bb" }}>
            All plans include $500 one-time setup. Month-to-month. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* UPSELL CTA                                                   */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            When the basics are handled, AI becomes easy.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-[#bcf1ae]/80">
            Tech Basics clients get first priority for our AI Transformation services.
            Once your systems are connected and your data is flowing, adding AI workflows
            is plug-and-play — not a rebuild.
          </p>
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
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1a1c19" }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: "#e3e3dd" }}>
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
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <CtaBanner
        title="Ready to get your tech right?"
        subtitle="$500 setup, then pick your plan. We build everything in 5-7 business days."
        buttonText="Get Started"
        buttonHref="/get-started"
      />
    </main>
  )
}
