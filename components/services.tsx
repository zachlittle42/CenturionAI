import { Card, CardContent } from "@/components/ui/card"
import { Check, BarChart3, Database, Mail, FileText, Phone, LineChart } from "lucide-react"

const services = [
  {
    title: "AI Consulting & Strategy",
    description:
      "We uncover untapped potential for AI within your organization, setting a clear plan for development and adoption.",
    benefits: [
      "Reduce guesswork with data-backed prioritization.",
      "Align AI initiatives with core business goals.",
      "Confidently estimate ROI and resource needs.",
    ],
    icon: <BarChart3 className="h-6 w-6 text-brand-600" />,
  },
  {
    title: "CRM (No-Code) Setup",
    description:
      "Get a tailored, user-friendly CRM without the complexity of traditional platforms. Capture leads, schedule follow-ups, and keep teams in sync.",
    benefits: [
      "Eliminate busywork with automated data entry.",
      "Centralize client communications for seamless collaboration.",
      "Scale workflows instantly, no coding required.",
    ],
    icon: <Database className="h-6 w-6 text-brand-600" />,
  },
  {
    title: "Cold Email Infrastructure",
    description:
      "We build high-deliverability mailboxes, incorporate GPT-driven personalization, and automate outreach sequences to fill your sales pipeline.",
    benefits: [
      "Attract steady, qualified leads.",
      "Maximize conversion with relevant, AI-personalized messages.",
      "Monitor deliverability and optimize continuously.",
    ],
    icon: <Mail className="h-6 w-6 text-brand-600" />,
  },
  {
    title: "Automated Proposals & Onboarding",
    description:
      "Streamline the entire client journey from pitch to contract signing. Our GPT integrations draft proposals in minutes, while automated onboarding cuts admin overhead.",
    benefits: [
      "Close deals faster with professional, consistent proposals.",
      "Centralize onboarding tasks and client documentation.",
      "Free up your team to nurture relationships, not paperwork.",
    ],
    icon: <FileText className="h-6 w-6 text-brand-600" />,
  },
  {
    title: "AI Voice Receptionist & Internal GPT",
    description:
      "Replace missed calls and repetitive Q&A with an AI-driven receptionist. Internally, GPT handles team knowledge, FAQs, and resource-sharing on demand.",
    benefits: [
      "Capture every lead call—even off-hours.",
      "Reduce repetitive support queries and free up staff bandwidth.",
      "Empower your team with instant, AI-powered insights.",
    ],
    icon: <Phone className="h-6 w-6 text-brand-600" />,
  },
  {
    title: "Modern Data Stack",
    description:
      "For organizations ready to scale, we implement robust pipelines, governance, and analytics. Gain real-time visibility, train advanced AI models, and future-proof your data infrastructure.",
    benefits: [
      "Break down data silos for unified reporting.",
      "Enable predictive analytics and machine learning at scale.",
      "Strengthen compliance and data governance practices.",
    ],
    icon: <LineChart className="h-6 w-6 text-brand-600" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Core Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Every service we offer targets a specific business challenge—improving the jobs your team already does,
            boosting efficiency, and growing revenue. Check out how we turn AI into real-world benefits:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md card-hover overflow-hidden bg-white">
              <div className="h-2 bg-gradient-to-r from-brand-500 to-brand-700"></div>
              <CardContent className="p-6 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

