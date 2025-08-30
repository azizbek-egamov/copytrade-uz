import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Statistics } from "@/components/statistics"
import { Results } from "@/components/results"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Statistics />
      <Results />
      <ContactModal />
      <Footer />
    </main>
  )
}
