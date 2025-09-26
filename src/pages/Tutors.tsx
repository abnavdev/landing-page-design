import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Tutors.css'
import TutorHero from '../components/TutorHero'
import TutorList from '../components/TutorList'
import CTASection from '../components/CTASection'
import ScrollIndicator from '../components/ScrollIndicator'

const Tutors: React.FC = () => {
  return (
    <div className="tutors-page">
      <Header />
      <TutorHero />
      <main className="section tutors-section">
        <TutorList />
      </main>
      <CTASection />
      <Footer />
      <ScrollIndicator />
    </div>
  )
}

export default Tutors
