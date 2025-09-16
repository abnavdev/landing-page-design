import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Steps from '../components/Steps'
import User from '../components/User'
import Reviews from '../components/Reviews'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <Features />
      </div>
      <Steps />
      <User />
      <Reviews />
    </div>
  )
}

export default Home