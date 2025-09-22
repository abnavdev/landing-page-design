import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import HowItWorksHero from '../components/HowItWorksHero'
import '../styles/HowItWorks.css'
import HowItWorksUser from '../components/HowItWorksUser'

const HowItWorks: React.FC = () => {
  return (
    <div className="parallax-container howitworks-page">
      <Header />
      <HowItWorksHero />
      <HowItWorksUser />
      <CTASection />
      <Footer />
    </div>
  )
}

export default HowItWorks