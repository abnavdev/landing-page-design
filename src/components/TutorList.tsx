import React from 'react'
import styles from '../styles/TutorList.module.css'
import TutorCard from './TutorCard'
import { sampleTutors } from '../data/sampleTutors'

const TutorList: React.FC = () => {
  const total = 662
  const showing = 12

  return (
    <section className={styles.listSection}>
  <div className="container">
        <div className={styles.headerWrap}>
          <h2 className={styles.title}>{`${total} Expert Tutors Found`}</h2>
          <p className={styles.subtitle}>{`Showing ${showing} of ${total} tutors for "All subjects"`}</p>
        </div>

        <div className={styles.cardsGrid}>
          {sampleTutors.slice(0, showing).map((tutor) => (
            <TutorCard key={tutor.id} data={tutor} />
          ))}
        </div>
  </div>
    </section>
  )
}

export default TutorList
