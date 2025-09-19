import React from 'react'
import styles from '../styles/CoreValues.module.css'
import favoriteIcon from '../assets/favorite.png'
import adsClickIcon from '../assets/ads_click.png'
import globeIcon from '../assets/globe.png'
import emojiObjectsIcon from '../assets/emoji_objects.png'

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: favoriteIcon,
      title: 'Student-Centered',
      description: 'Every decision we make puts student success first. We believe in nurturing potential and celebrating growth.'
    },
    {
      icon: adsClickIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards in tutor selection, curriculum design, and student support.'
    },
    {
      icon: globeIcon,
      title: 'Accessibility',
      description: 'Quality education should be available to everyone, everywhere. We make learning accessible and affordable.'
    },
    {
      icon: emojiObjectsIcon,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and proven educational methods to enhance learning outcomes.'
    }
  ]

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <p className={styles.sectionSubtitle}>
          These principles guide everything we do and shape how we serve our student community.
        </p>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                <img src={value.icon} alt={value.title} className={styles.icon} />
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues