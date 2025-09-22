import React from 'react'
import styles from '../styles/HowItWorksHero.module.css'

const HowItWorksHero: React.FC = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.title}>Empowering Students to<br />    Achieve Excellence</div>
                <div className={styles.subtitle}>At Ferryly, we believe every student has the potential to excel. Our mission is to provide personalized, expert-led education that transforms academic dreams into reality.</div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorksHero