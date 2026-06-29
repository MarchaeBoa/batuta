import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { LogoCloud } from '@/components/site/logo-cloud'
import { Benefits } from '@/components/site/benefits'
import { ProductDemo } from '@/components/site/product-demo'
import { Features } from '@/components/site/features'
import { Stats } from '@/components/site/stats'
import { Testimonials } from '@/components/site/testimonials'
import { FAQ } from '@/components/site/faq'
import { FinalCTA } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Benefits />
        <ProductDemo />
        <Features />
        <Stats />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
