import { Card } from "@/components/ui/card"

export function DetailedServices() {
  const services = [
    {
      title: "Preparation of Management Accounts",
      description:
        "Precise, up-to-date financial record-keeping that provides unparalleled clarity into your business performance and empowers you to make smarter decisions.",
      features: [
        "Monthly financial statements",
        "Accounts payable and receivable management",
        "Bank reconciliation and cash flow tracking",
        "Integration of business with quickbook",
      ],
      technology: [
        "Excel & Microsoft 365",
        "Xero Cloud Accounting",
        "Quickbook",
      ],
    },
    {
      title: "Taxation",
      description:
        "Strategic tax planning and end-to-end compliance management to legally minimize your tax burden and ensure rigorous alignment with all regulatory requirements.",
      features: [
        "Strategic tax planning",
        "Federal and state tax preparation",
        "Quarterly estimated tax payments",
        "Tax audit support and representation",
        "Expert advocacy of tax cases",
        "Preparation and filing of income tax return",
        "Filing of preparation and submission of withholding statements",
      ],
      serviceAreas: [
        "Individual & AOP tax preparation",
        "Company tax compliance",
      ],
    },
    {
      title: "Corporate",
      description:
        "Expert corporate services anchored in the Companies Act, 2017. We provide full-scope assistance for SECP filings and all statutory returns, ensuring your entity is always compliant and legally robust.",
      features: [
        "Capital structure optimization",
        "Company Incorporation & compliances",
        "Transfer of shares",
      ],
      benefits: [
        "Enhanced decision-making capabilities",
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
                <h4 className="text-lg font-bold text-black mb-[-10px]">Key Features</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 border border-gray-200 bg-white ">
                <h4 className="text-lg font-bold text-black mb-[-10px]">
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
