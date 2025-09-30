import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import HowItWorksHero from '../components/HowItWorksHero'
import '../styles/HowItWorks.css'
import HowItWorksUser from '../components/HowItWorksUser'
import ScrollIndicator from '../components/ScrollIndicator'
import ParallaxSection from '../components/ParallaxSection'
import Decorators from '../components/common/Decorators'

const HowItWorks: React.FC = () => {
  return (
    <div className="parallax-container howitworks-page">
      <Header />
      <ParallaxSection speed={0.1} direction="up">
        <div style={{ position: 'relative' }}>
          <HowItWorksHero />
          <Decorators count={3} seed={4} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.1} direction="up">
        <div style={{ position: 'relative' }}>
          <HowItWorksUser />
          <Decorators count={3} seed={1} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <CTASection />
          <Decorators count={2} seed={10} />
        </div>
      </ParallaxSection>
      <Footer />
      <ScrollIndicator />
    </div>
  )
}

export default HowItWorks