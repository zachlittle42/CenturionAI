const metrics = [
  { value: "30+", label: "Teams Transformed" },
  { value: "3x", label: "Faster Delivery" },
  { value: "95%", label: "Adoption Rate" },
  { value: "$2M+", label: "Client Revenue Impact" },
]

export default function SocialProof() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gray-200">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-bold text-brand-700 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
