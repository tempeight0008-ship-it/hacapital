import { Card } from "@/components/ui/card"

export function DetailedServices() {
  const services = [
    {
      title: "Bookkeeping",
      description:
        "Accurate and timely financial record-keeping to give you clear visibility into your business performance and financial health.",
      features: [
        "Monthly financial statements",
        "Accounts payable and receivable management",
        "Bank reconciliation and cash flow tracking",
        "QuickBooks setup and training",
      ],
      technology: [
        "QuickBooks Online & Desktop",
        "Xero Cloud Accounting",
        "Excel & Google Sheets",
        "Receipt Bank & Hubboc",
      ],
    },
    {
      title: "Tax Services",
      description:
        "Comprehensive tax planning and compliance services to minimize your tax liability while ensuring full compliance with regulations.",
      features: [
        "Strategic tax planning and optimization",
        "Federal and state tax preparation",
        "Quarterly estimated tax payments",
        "Tax audit support and representation",
      ],
      serviceAreas: [
        "Individual tax preparation",
        "Business tax compliance",
        "Tax planning strategies",
        "IRS representation",
      ],
    },
    {
      title: "Corporate",
      description:
        "Strategic financial planning and analysis to help your business make informed decisions and achieve long-term growth objectives.",
      features: [
        "Financial modeling and forecasting",
        "Investment analysis and capital allocation",
        "M&A advisory and due diligence",
        "Capital structure optimization",
      ],
      benefits: [
        "Improved cash flow management",
        "Enhanced decision-making capabilities",
        "Optimized capital structure",
        "Strategic growth planning",
      ],
    },
  ]

  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Comprehensive Services</h2>
          <p className="text-gray-600 text-lg">Detailed financial solutions designed for your business needs</p>
        </div>

        {services.map((service, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{service.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-6 border border-gray-200 bg-white">
                <h4 className="text-lg font-bold text-black">Key Features</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 border border-gray-200 bg-white">
                <h4 className="text-lg font-bold text-black">
                  {service.benefits ? "Benefits" : service.serviceAreas ? "Service Areas" : "Technology Stack"}
                </h4>
                <ul className="space-y-3">
                  {(service.benefits || service.serviceAreas || service.technology || []).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {index < services.length - 1 && <hr className="my-8 border-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  )
}
