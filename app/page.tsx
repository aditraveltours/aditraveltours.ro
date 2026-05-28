import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Fleet from '@/components/Fleet'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}