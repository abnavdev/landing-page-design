import React from 'react'
import styles from './Hero.module.css'
import aboutHeroImage from '../assets/aboutHero.jpg'
import Button from './Button'
import { useParallaxBackground, useScrollAnimation } from '../hooks/useParallax'

const Hero: React.FC = () => {
  const backgroundPosition = useParallaxBackground(0.5);
  const { isVisible, ref } = useScrollAnimation(0.1);

  return (
    <section
      className={styles.hero}
      style={{
        'backgroundImage': `url(${aboutHeroImage})`,
        'backgroundPosition': backgroundPosition
      } as React.CSSProperties
    }
    >
      <div className={styles.overlay}></div>
      <div className="container">
        <div
          ref={ref}
          className={`${styles.content} ${isVisible ? styles.slideIn : ''}`}
        >
          <h1 className={styles.slideInTitle}>Your Journey to Academic Excellence Starts Here</h1>
          <p className={styles.slideInText}>Connect with expert tutors who understand your learning style. Get personalized guidance, track your progress, and achieve the grades you deserve.</p>
          <div className={`${styles.buttonRow} ${styles.slideInButtons}`}>
            <Button variant="secondary">Start your free trial</Button>
            <Button variant="primary">Find your tutor</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero