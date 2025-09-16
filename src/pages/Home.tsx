import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Steps from '../components/Steps'
import User from '../components/User'

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
    </div>
  )
}

export default Home