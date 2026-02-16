import { AlertTriangle, TrendingDown, Clock } from "lucide-react"

const painPoints = [
  {
    icon: TrendingDown,
    headline: "You bought the seats. Nobody uses them.",
    body: "Your company pays for Claude, ChatGPT, or Copilot. Adoption is under 20%. Most employees tried it once, got a bad answer, and went back to doing things the old way.",
  },
  {
    icon: AlertTriangle,
    headline: "Your team prompts like it's Google search.",
    body: "Without training, people treat AI like a search bar. They get generic answers and assume the tools don't work. The problem isn't the tools. It's the setup.",
  },
  {
    icon: Clock,
    headline: "Your competitors just shipped in 2 weeks what takes you 2 months.",
    body: "AI-augmented teams are building faster, writing better, and automating workflows you haven't even mapped yet. Every month you wait, the gap gets wider.",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-black z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-700 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-800 rounded-full opacity-10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The AI gap is real. And it's growing.
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.headline}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="rounded-lg bg-brand-500/10 p-3 w-fit mb-4">
                <point.icon className="h-6 w-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {point.headline}
              </h3>
              <p className="text-brand-100 leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
