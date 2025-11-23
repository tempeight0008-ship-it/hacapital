import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Ready to optimize your finances?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Let's discuss how strategic financial planning can help your business achieve its goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-900 px-8 py-2 rounded-lg flex items-center gap-2 justify-center">
            Schedule Consultation
            <span>›</span>
          </Button>
          <Button
            variant="outline"
            className="px-8 py-2 rounded-lg border-gray-300 flex items-center gap-2 justify-center bg-transparent"
          >
            ✉️ Email Direct
          </Button>
        </div>
      </div>
    </section>
  )
}
