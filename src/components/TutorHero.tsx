import React from 'react'
import styles from '../styles/TutorHero.module.css'
import Button from './Button'

const TutorHero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <h1 className={styles.title}>Find Your Perfect Tutor Match</h1>
          <p className={styles.subtitle}>Connect with expert tutors who understand your learning style and help you achieve your academic goals.</p>
        </div>

  <div className={styles.searchCard}>
          <div className={styles.searchInput} role="search" aria-label="Search tutors">
            <div className={styles.searchIcon} aria-hidden="true" />
            <input
              className={styles.inputField}
              type="search"
              placeholder="Search by subject, tutor name, or expertise..."
              aria-label="Search tutors"
            />
          </div>
          <Button variant="primary" className={styles.filtersButtonWrap}>
            <span className={styles.filterIcon} aria-hidden="true" />
            <span className={styles.filterLabel}>Filter</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TutorHero
