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

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <AboutHero />
      <AboutStory />
      <CoreValues />
      <TeamSection />
      <Timeline />
      <AboutReview />
      <CTASection />
      <Footer />
      <ScrollIndicator />
    </div>
  )
}

export default About