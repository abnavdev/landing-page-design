import React from 'react'
import styles from '../styles/PriceTier.module.css'
import Button from './Button'
import CheckIcon from './CheckIcon'

type Feature = {
  label: string
}

interface PriceTierProps {
  title: string
  subtitle?: string
  price: string
  priceSuffix?: string
  features: Feature[]
  ctaText?: string
  featured?: boolean
}

const PriceTier: React.FC<PriceTierProps> = ({ title, subtitle, price, priceSuffix = '/month', features, ctaText = 'Get Started', featured = false }) => {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.top}
      >
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>

      <div className={styles.priceRow}>
        <div className={styles.price}>
          <span className={styles.priceAmount}>{price}</span>
          <span className={styles.priceSuffix}>{priceSuffix}</span>
        </div>
      </div>

      <div className={styles.divider} />

      <ul className={styles.features}>
        {features.map((f, i) => (
          <li key={i} className={styles.featureItem}>
            <span className={styles.featureIcon}><CheckIcon /></span>
            <span className={styles.featureLabel}>{f.label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.ctaWrap}>
        <Button variant={featured ? 'primary' : 'secondary'} className={featured ? '' : styles.localSecondary}>{ctaText}</Button>
      </div>
    </div>
  )
}

export default PriceTier
