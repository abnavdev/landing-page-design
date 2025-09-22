import React from 'react'
import styles from '../styles/PricingHero.module.css'

const PricingHero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.title}>Choose Your Learning Plan</div>
          <div className={styles.subtitle}>Flexible plans designed to fit every student's needs and budget. All plans include our satisfaction guarantee.</div>
        </div>
      </div>
    </section>
  )
}

export default PricingHero
