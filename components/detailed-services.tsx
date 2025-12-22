"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export function DetailedServices() {
  const [showSecondCard, setShowSecondCard] = useState(true)
  const services = [
    {
      title: "Accounting",
      description:
        "Precise, up-to-date financial record-keeping that provides unparalleled clarity into your business performance and empowers you to make smarter decisions.",
      features: [
        "Management accounts",
        "Invoices management",
        "Integration with accounting software",
      ],
      technology: [
        "Microsoft 365",
        "QuickBook",
        "Xero Cloud Accounting",
      ],
    },
    {
      title: "Taxation",
      description:
        "Strategic tax planning and end-to-end compliance management to legally minimize your tax burden and ensure rigorous alignment with all regulatory requirements.",
      features: [
        "Strategic tax planning",
        "Expert advocacy of tax cases",
        "Preparation and filing of income tax return",
      ],
      serviceAreas: [
        "Individual & AOP (partnership)",
        "Company tax compliance",
        "E-commerce",
      ],
    },
    {
      title: "Corporate Advisory",
      description:
        "Expert corporate services anchored in the Companies Act, 2017. We provide full-scope assistance for SECP filings and all statutory returns, ensuring your entity is always compliant and legally robust.",
      features: [
        "Company Incorporation & compliances",
        "Alternation in memorandum",
        "Transfer of shares and further issuance of capital",
        "Winding up of company",
        "Special assignments assigned by regulatory body",
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

              {showSecondCard && (
                <Card className="p-6 border border-gray-200 bg-white transition-all duration-300 ease-in-out">
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
              )}
            </div>

            {index < services.length - 1 && <hr className="my-8 border-gray-200" />}
          </div>
        ))}
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setShowSecondCard(!showSecondCard)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-200 z-50 group"
        aria-label={showSecondCard ? "Hide details" : "Show details"}
      >
        <svg
          className="w-6 h-6 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {showSecondCard ? (
            // Eye icon (visible)
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          ) : (
            // Eye-off icon (hidden)
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          )}
        </svg>

        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          {showSecondCard ? "Hide Details" : "Show Details"}
        </span>
      </button>
    </section>
  )
}
