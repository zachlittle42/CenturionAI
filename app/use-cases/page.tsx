import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export const metadata = {
  title: "Use Cases | Verdant AI Partners",
  description:
    "Real problems we solve for real businesses. Healthcare practices, clinics, and service businesses — here's how we help.",
}

const useCases = [
  {
    title: "Automate Patient Follow-Up",
    problem:
      "You're losing patients because no one follows up after their visit. Missed calls go unreturned. Appointment reminders don't go out. Reactivation campaigns don't exist.",
    solution:
      "We build automated follow-up systems that text patients after visits, send appointment reminders, reactivate dormant patients, and ensure no call goes unanswered.",
    bullets: [
      "AI-powered missed-call text-back",
      "Automated post-visit follow-up sequences",
      "Patient reactivation campaigns",
      "Appointment reminder system",
    ],
    mapsTo: ["Fundamentals", "Transformation"],
  },
  {
    title: "Close More In-Person Sales",
    problem:
      "Your front desk or sales team is leaving money on the table. They don't know which services to recommend, when to follow up, or how to handle objections.",
    solution:
      "We deploy AI-guided sales tools that help your team recommend the right services, track conversations, and follow up at the right time.",
    bullets: [
      "AI-guided conversation frameworks",
      "Smart service recommendations",
      "Follow-up automation and tracking",
      "Sales performance dashboards",
    ],
    mapsTo: ["Strategy", "Transformation"],
  },
  {
    title: "Eliminate Manual Data Entry",
    problem:
      "Your team spends hours every week on paperwork, data entry, and copying information between systems. It's expensive, error-prone, and soul-crushing.",
    solution:
      "We build automations that capture, process, and route data automatically — from intake forms to CRM entries to billing records.",
    bullets: [
      "Automated form processing and data capture",
      "Cross-system data synchronization",
      "AI-powered document processing",
      "Error reduction and audit trails",
    ],
    mapsTo: ["Transformation", "Engineering"],
  },
  {
    title: "Train Your Team on AI",
    problem:
      "Your team knows AI exists but has no idea how to use it effectively. Some are scared of it. Others are using it randomly with no consistency.",
    solution:
      "We run customized workshops that teach your team to use AI tools for their specific roles — with prompt libraries, hands-on practice, and ongoing support.",
    bullets: [
      "Role-specific AI training workshops",
      "Custom prompt libraries for every department",
      "Hands-on practice with real workflows",
      "Adoption tracking and follow-up sessions",
    ],
    mapsTo: ["Strategy", "Transformation"],
  },
  {
    title: "Build Custom AI Agents",
    problem:
      "You need AI that does more than chat — agents that can handle calls, send emails, schedule appointments, and process data autonomously.",
    solution:
      "We design, build, and deploy custom AI agents that run your workflows 24/7. Voice agents, email agents, scheduling agents — whatever your business needs.",
    bullets: [
      "Voice agents for inbound/outbound calls",
      "Email automation and outreach agents",
      "Scheduling and appointment management",
      "CRM integration and lead scoring",
    ],
    mapsTo: ["Engineering"],
  },
  {
    title: "Modernize Your Tech Stack",
    problem:
      "You're running your business on 5 disconnected tools — a website builder here, a CRM there, invoicing somewhere else. Nothing talks to each other.",
    solution:
      "We consolidate your tech into one integrated platform with a modern website, business phone, CRM, invoicing, and automation — all connected.",
    bullets: [
      "Modern website built to convert",
      "Business phone with missed-call text-back",
      "Unified CRM and invoicing",
      "Automated workflows connecting everything",
    ],
    mapsTo: ["Fundamentals"],
  },
]

export default function UseCasesPage() {
  return (
    <main>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "#121411" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#bcf1ae]/50 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0d0f0c] rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0d0f0c] rounded-full opacity-20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#0d0f0c]/50 rounded-full border border-[#42493e]/50">
            <span className="text-[#a1d494] font-medium text-sm">Use Cases</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white font-display text-balance opacity-0 animate-reveal">
            Real problems we solve for real businesses.
          </h1>

          <p
            className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-1"
            style={{ color: "#c2c9bb" }}
          >
            Healthcare practices, clinics, and service businesses — here&apos;s how we help.
          </p>

          <div className="flex items-center justify-center opacity-0 animate-reveal stagger-2">
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
      {/* USE CASE SECTIONS                                            */}
      {/* ============================================================ */}
      {useCases.map((useCase, index) => {
        const isDark = index % 2 === 0
        return (
          <section
            key={useCase.title}
            className="py-20 px-4"
            style={{ backgroundColor: isDark ? "#121411" : "#1a1c19" }}
          >
            <div className="container mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left side: content */}
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display"
                    style={{ color: "#FFFFFF" }}
                  >
                    {useCase.title}
                  </h2>

                  <div className="mb-6">
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "#c2c9bb" }}
                    >
                      The Problem
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "#c2c9bb" }}
                    >
                      {useCase.problem}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "#c2c9bb" }}
                    >
                      Our Solution
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "#c2c9bb" }}
                    >
                      {useCase.solution}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {useCase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <Check
                          className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#bcf1ae]"
                        />
                        <span
                          className="text-sm"
                          style={{ color: "#e3e3dd" }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Maps to badges */}
                  <div className="flex items-center gap-3 mb-8">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#c2c9bb" }}
                    >
                      Maps to:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {useCase.mapsTo.map((service) => (
                        <span
                          key={service}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#bcf1ae]/15 text-[#a1d494] border border-[#bcf1ae]/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
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

                {/* Right side: visual accent card */}
                <div className="hidden md:block">
                  <div
                    className={`rounded-xl border p-6 ${
                      isDark
                        ? "border-[#bcf1ae]/15 bg-[#1a1c19]"
                        : "border-[#42493e]/15 bg-[#292b27]"
                    }`}
                  >
                    <div
                      className="text-lg font-bold mb-4 text-white"
                    >
                      {useCase.title}
                    </div>
                    <ul className="space-y-3">
                      {useCase.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-[#bcf1ae]"
                          />
                          <span
                            className="text-sm"
                            style={{ color: "#c2c9bb" }}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-5 pt-4 border-t flex flex-wrap gap-2 ${
                        isDark ? "border-[#42493e]/40" : "border-[#42493e]/15"
                      }`}
                    >
                      {useCase.mapsTo.map((service) => (
                        <span
                          key={service}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#bcf1ae]/10 text-[#a1d494] border border-[#bcf1ae]/15"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "#1a1c19" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#bcf1ae]/20 to-transparent" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#bcf1ae]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#0d0f0c]/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Have a use case in mind?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#c2c9bb" }}
          >
            Tell us what you&apos;re trying to solve. We&apos;ll recommend the right path and
            get back to you within 24 hours.
          </p>
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
      </section>
    </main>
  )
}
