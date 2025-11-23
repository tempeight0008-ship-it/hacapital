import { Button } from "@/components/ui/button"

export function EmailContact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-5 md:py-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Have questions? Reach out directly.</p>
        <a href="mailto:hacapital@example.com" className="inline-block">
          <Button className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-lg flex items-center gap-2">
            ✉ Email Direct
          </Button>
        </a>
      </div>
    </section>
  )
}
