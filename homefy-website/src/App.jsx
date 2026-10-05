import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import BusinessSegments from './components/sections/BusinessSegments'
import InteriorsSection from './components/sections/InteriorsSection'
import SolarSection from './components/sections/SolarSection'
import WhyChooseUs from './components/sections/WhyChooseUs'
import ProcessTimeline from './components/sections/ProcessTimeline'
import ContactCTA from './components/sections/ContactCTA'
import LocationMap from './components/sections/LocationMap'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

const HOME_TITLE = 'TEAM HOMEFY LLP | Turning Houses into Homes'

function isPrivacyHash() {
  return window.location.hash === '#privacy'
}

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(isPrivacyHash)

  useEffect(() => {
    const syncView = () => setShowPrivacy(isPrivacyHash())
    window.addEventListener('hashchange', syncView)
    return () => window.removeEventListener('hashchange', syncView)
  }, [])

  useEffect(() => {
    if (showPrivacy) {
      document.title = 'Privacy Policy | TEAM HOMEFY LLP'
      window.scrollTo(0, 0)
      return
    }

    document.title = HOME_TITLE
    const hash = window.location.hash
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const target = document.getElementById(hash.slice(1))
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView())
    }
  }, [showPrivacy])

  return (
    <>
      <Navbar />
      {showPrivacy ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
          <About />
          <BusinessSegments />
          <InteriorsSection />
          <SolarSection />
          <WhyChooseUs />
          <ProcessTimeline />
          <LocationMap />
          <ContactCTA />
        </main>
      )}
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
