import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DetailedServices } from "@/components/detailed-services"
import { About } from "@/components/about"
import { EmailContact } from "@/components/email-contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DetailedServices />
      <About />
      <EmailContact />
      <Footer />
    </main>
  )
}
