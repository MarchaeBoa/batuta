import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Integrations } from '@/components/sections/integrations'
import { Pillars } from '@/components/sections/pillars'
import { Cofre } from '@/components/sections/cofre'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Personas } from '@/components/sections/personas'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Integrations />
        <Pillars />
        <Cofre />
        <HowItWorks />
        <Personas />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
