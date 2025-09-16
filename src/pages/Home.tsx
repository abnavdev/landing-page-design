import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Steps from '../components/Steps'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <Features />
      </div>
      <Steps />
    </div>
  )
}

export default Home