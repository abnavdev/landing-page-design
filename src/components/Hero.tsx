import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../assets/hero.png'
import Button from './Button'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1>Your Journey to Academic Excellence Starts Here</h1>
          <p>Connect with expert tutors who understand your learning style. Get personalized guidance, track your progress, and achieve the grades you deserve.</p>
          <div className={styles.buttonRow}>
            <Button variant="secondary">Start your free trial</Button>
            <Button variant="primary">Find your tutor</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero