"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const challengeOptions = [
  "Getting tech basics set up",
  "Understanding my AI options",
  "Building custom AI workflows",
  "Hiring AI engineering capacity",
  "Deploying autonomous AI agents",
]

export default function LeadForm() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [challenge, setChallenge] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !company || !challenge) return

    setSubmitting(true)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, challenge }),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // silently fail — form still shows
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#1E293B" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        <div className="container relative z-10 mx-auto max-w-xl text-center">
          <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-10">
            <p className="text-2xl font-bold text-white mb-2">Thanks!</p>
            <p className="text-lg" style={{ color: "#94A3B8" }}>
              We will be in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#1E293B" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-xl text-center">
        <h2 className="font-display text-balance text-3xl md:text-4xl font-bold text-white mb-4">
          Not sure where to start?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "#94A3B8" }}>
          Tell us a bit about your situation and we&apos;ll recommend the right path.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-slate-300 mb-1.5">
              Name
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="lead-company" className="block text-sm font-medium text-slate-300 mb-1.5">
              Company
            </label>
            <input
              id="lead-company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
              placeholder="Your company"
            />
          </div>

          <div>
            <label htmlFor="lead-challenge" className="block text-sm font-medium text-slate-300 mb-1.5">
              Biggest challenge right now
            </label>
            <select
              id="lead-challenge"
              required
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className="w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors appearance-none"
            >
              <option value="" disabled>Select your biggest challenge</option>
              {challengeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white font-medium transition-colors shadow-lg shadow-blue-500/20 group mt-2"
          >
            {submitting ? "Sending..." : "Get My Recommendation"}
            {!submitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
          </button>
        </form>
      </div>
    </section>
  )
}
