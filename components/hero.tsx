"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">Strategic Finance</h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
          Helping businesses optimize their financial operations and achieve sustainable growth through strategic
          planning, tax optimization, and comprehensive financial management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              const servicesSection = document.getElementById("services")
              servicesSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Button className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-lg flex items-center gap-2 w-fit">
              View Services
              <span>›</span>
            </Button>
          </a>
          <a href="mailto:hacapital@example.com">
            <Button variant="outline" className="px-6 py-2 rounded-lg border-gray-300 w-fit bg-transparent">
              ✉ Email Direct
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
