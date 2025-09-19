import React from 'react'
import styles from './StatsSection.module.css'
import expandCircleDown from '../assets/expand_circle_down.svg'
import expandCircleUp from '../assets/expand_circle_up.svg'

const StatsSection: React.FC = () => {
  const stats = [
    { value: '10,000+', label: 'STUDENTS IMPROVING THEIR GRADES' },
    { value: '500+', label: 'VERIFIED EXPERT TUTORS' },
    { value: '50+', label: 'SUBJECTS COVERED' },
    { value: '4.9/5', label: 'AVERAGE TUTOR RATING' },
    { value: '2 Million+', label: 'TUTORING HOURS COMPLETED' },
    { value: '95%', label: 'OF STUDENTS IMPROVE BY ONE LETTER GRADE' }
  ]

  return (
    <section className={styles.statsSection}>
      <div className={styles.separator}></div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => {
          return (
            <div key={index} className={styles.statItem}>
              <div className={`${styles.statValue} ${styles.statValueWithUnderline}`}>
                {stat.value}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <p className={styles.faqSubtitle}>
          Questions? We Have Answers How quickly can I get started?
        </p>
        <p className={styles.faqDescription}>
          You can book your first session within minutes of signing up. Most students are matched with a tutor and learning within 24 hours.
        </p>

        <div className={styles.faqAccordion}>
          <div className={styles.faqItem + ' ' + styles.active}>
            <div className={styles.faqQuestion}>
              Are the tutors qualified?
              <span className={styles.faqToggle}>
                <img src={expandCircleUp} alt="Collapse" />
              </span>
            </div>
            <div className={styles.faqAnswer}>
              Every tutor goes through rigorous screening including background checks, degree verification, and teaching assessments.
              Only 3% of applicants are accepted.
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              What if I don't like my tutor?
              <span className={styles.faqToggle}>
                <img src={expandCircleDown} alt="Expand" />
              </span>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              How do online sessions work?
              <span className={styles.faqToggle}>
                <img src={expandCircleDown} alt="Expand" />
              </span>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              Can parents monitor progress?
              <span className={styles.faqToggle}>
                <img src={expandCircleDown} alt="Expand" />
              </span>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              What subjects do you cover?
              <span className={styles.faqToggle}>
                <img src={expandCircleDown} alt="Expand" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection