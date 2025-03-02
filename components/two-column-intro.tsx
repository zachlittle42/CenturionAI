import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Cog } from "lucide-react"

export default function TwoColumnIntro() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Approach</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-brand-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-500"></div>
            <CardContent className="p-8">
              <div className="mb-6 w-14 h-14 rounded-lg bg-brand-100 flex items-center justify-center">
                <BarChart3 className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Strategy & Roadmapping</h3>
              <p className="text-gray-700 leading-relaxed">
                We dive deep into your current operations and data to pinpoint the highest-impact AI opportunities. Our
                thorough roadmapping ensures every project has clear objectives, realistic timelines, and a direct line
                to revenue or efficiency gains.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-brand-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-600"></div>
            <CardContent className="p-8">
              <div className="mb-6 w-14 h-14 rounded-lg bg-brand-100 flex items-center justify-center">
                <Cog className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Hands-On Implementation</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't just advise—we build. Our team handles all phases of AI deployment, from automation workflows
                to advanced analytics integration. We prioritize quick wins that pay off fast, while laying a strong
                foundation for future AI expansions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

