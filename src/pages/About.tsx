import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import CoreValues from '../components/CoreValues'
import TeamSection from '../components/TeamSection'
import Timeline from '../components/Timeline'
import CTASection from '../components/CTASection'
import ScrollIndicator from '../components/ScrollIndicator'
import AboutReview from '../components/AboutReview'
import Decorators from '../components/common/Decorators'
import ParallaxSection from '../components/ParallaxSection'

const About: React.FC = () => {
  return (
    <div className="parallax-container">
      <Header />
      <div style={{ position: 'relative' }}>
          <AboutHero />
          <Decorators count={2} seed={7} />
        </div>
      <ParallaxSection speed={0.1} direction="up">
        <div style={{ position: 'relative' }}>
          <AboutStory />
          <Decorators count={2} seed={5} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.15} direction="up">
        <div style={{ position: 'relative' }}>
          <CoreValues />
          <Decorators count={2} seed={4} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <TeamSection />
          <Decorators count={2} seed={2} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.12} direction="up">
        <div style={{ position: 'relative' }}>
          <Timeline />
          <Decorators count={2} seed={2} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.1} direction="up">
        <div style={{ position: 'relative' }}>
          <AboutReview />
          <Decorators count={2} seed={7} />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <CTASection />
          <Decorators count={2} seed={7} />
        </div>
      </ParallaxSection>
      <Footer />
      <ScrollIndicator />
    </div>
  )
}

export default About