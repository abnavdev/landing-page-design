import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Steps from '../components/Steps'
import User from '../components/User'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import ParallaxSection from '../components/ParallaxSection'
import ScrollIndicator from '../components/ScrollIndicator'
import CTASection from '../components/CTASection'
import StatsSection from '../components/StatsSection'
import PricingSection from '../components/PricingSection'
import Decorators from '../components/common/Decorators'

const Home: React.FC = () => {
  return (
    <div className="parallax-container">
      <Header />
      <Hero />
      <ParallaxSection speed={0.1} direction="up">
        <div style={{ position: 'relative' }}>
          <Features />
          <Decorators count={2} seed={1} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.15} direction="up">
        <Steps />
      </ParallaxSection>
      <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <User />
          <Decorators count={2} seed={2} />
        </div>
      </ParallaxSection>
         <ParallaxSection speed={0.12} direction="up">
        <div style={{ position: 'relative' }}>
          <Reviews />
          <Decorators count={2} seed={2} />
        </div>
      </ParallaxSection>
       <ParallaxSection speed={0.1} direction="up">
        <PricingSection />
      </ParallaxSection>
       <ParallaxSection speed={0.12} direction="up">
        <StatsSection />
      </ParallaxSection>
      <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <CTASection />
          <Decorators count={1} seed={4} />
        </div>
      </ParallaxSection>
      <Footer />
      <ScrollIndicator />
    </div>
  )
}

export default Home