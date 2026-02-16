import Link from "next/link"
import { Users, Code, ArrowRight, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const paths = [
  {
    icon: Users,
    title: "AI Transformation",
    subtitle: "We make your team AI-powered.",
    description:
      "For companies that want their existing team to work faster with AI. We handle the setup, training, and workflow automation so adoption actually sticks.",
    bullets: [
      "Platform setup with real connectors to your tools",
      "Hands-on team training that goes beyond prompting basics",
      "Custom automated workflows that replace manual busywork",
      "Managed AI infrastructure with always-on agents",
    ],
    href: "/ai-transformation",
    ctaText: "Transform Your Team",
  },
  {
    icon: Code,
    title: "AI Engineering",
    subtitle: "Our AI team builds for you.",
    description:
      "For companies that need software built fast. Our AI-augmented engineering teams deliver working products in biweekly sprints at a fraction of traditional agency cost.",
    bullets: [
      "Full-stack development with AI-augmented velocity",
      "Biweekly sprint delivery with working software",
      "Internal tools, apps, APIs, and data pipelines",
      "Outcome-based pricing tied to what ships",
    ],
    href: "/ai-engineering",
    ctaText: "Build With Us",
  },
]

export default function TwoPaths() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Two ways we close the gap.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you want to make your team AI-native or need our team to build for you, every
            engagement starts with understanding your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {paths.map((path, index) => (
            <Card
              key={path.title}
              className="relative overflow-hidden border-0 shadow-md card-hover"
            >
              {/* Gradient top bar */}
              <div
                className={`h-1.5 ${
                  index === 0
                    ? "bg-gradient-to-r from-brand-400 to-brand-600"
                    : "bg-gradient-to-r from-brand-600 to-brand-800"
                }`}
              ></div>
              <CardContent className="p-8">
                <div
                  className={`rounded-lg p-3 w-fit mb-5 ${
                    index === 0 ? "bg-brand-50" : "bg-brand-50"
                  }`}
                >
                  <path.icon
                    className={`h-7 w-7 ${
                      index === 0 ? "text-brand-500" : "text-brand-700"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {path.title}
                </h3>
                <p className="text-lg font-medium text-brand-600 mb-3">
                  {path.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {path.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {path.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={path.href}
                  className={`inline-flex items-center font-medium group ${
                    index === 0 ? "text-brand-600" : "text-brand-700"
                  }`}
                >
                  {path.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
