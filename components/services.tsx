import { Card } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: "📈",
      title: "Corporate Finance",
      description:
        "Strategic financial planning, investment analysis, and capital structure optimization for growing businesses.",
    },
    {
      icon: "📋",
      title: "Tax Services",
      description:
        "Comprehensive tax planning, compliance, and optimization strategies for individuals and businesses.",
    },
    {
      icon: "📊",
      title: "Bookkeeping",
      description: "Accurate financial record-keeping, reporting, and accounting system setup and management.",
    },
  ]

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Core Services</h2>
          <p className="text-gray-600 text-lg">Comprehensive financial solutions tailored to your business needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border border-gray-200 bg-white hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Learn more ›
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
