import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Tutors.css'
import TutorHero from '../components/TutorHero'
import TutorList from '../components/TutorList'
import CTASection from '../components/CTASection'
import ScrollIndicator from '../components/ScrollIndicator'
import ParallaxSection from '../components/ParallaxSection'
import Decorators from '../components/common/Decorators'

const Tutors: React.FC = () => {
  return (
    <div className="tutors-page">
      <Header />
      <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <TutorHero />
          <Decorators count={1} seed={2} />
        </div>
      </ParallaxSection>
        <main className="section tutors-section">
          <div style={{ position: 'relative' }}>
          <TutorList />
          <Decorators count={4} seed={10} />
        </div>
        </main> 
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

export default Tutors
