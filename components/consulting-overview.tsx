import { CheckCircle } from "lucide-react"

export default function ConsultingOverview() {
  const benefits = [
    "Technical excellence paired with genuine business insight",
    "Customized solutions for your unique challenges",
    "Measurable ROI at every step",
    "Adaptive roadmap that grows with your business",
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-black z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-700 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-800 rounded-full opacity-10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Our Consulting Stands Out</h2>
        <div className="w-24 h-1 bg-brand-500 mx-auto mb-8"></div>

        <p className="text-xl text-brand-50 max-w-3xl mx-auto mb-12 leading-relaxed">
          Centurion AI pairs technical excellence with genuine business insight. We learn your unique challenges, test
          viable solutions, and measure ROI every step of the way.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-left animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="h-6 w-6 text-brand-400 flex-shrink-0 mt-0.5" />
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

