import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DetailedServices } from "@/components/detailed-services"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { EmailContact } from "@/components/email-contact"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <DetailedServices />
            <About />
            <EmailContact />
            <Footer />
        </main>
    )
}
