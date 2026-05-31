import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { FeaturedDestinations } from "@/components/FeaturedDestinations"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { WorkExamples } from "@/components/WorkExamples"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <WorkExamples />
      <Footer />
    </main>
  )
}