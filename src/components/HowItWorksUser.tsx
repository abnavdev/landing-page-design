import React from 'react'
import styles from '../styles/User.module.css'

const HowItWorksUser: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* Students section: text left, single image right */}
      <section className={styles.section}>
        <div className={styles.left}>
          <div className={styles.pill}>
            <div className={styles.pillText}>Step 1</div>
          </div>

          <div className={styles.title}>Take Free Assessment</div>

          <div className={styles.body}>
            <p>
              Complete our comprehensive 10-minute evaluation to identify your learning style, strengths, and areas for improvement.
            </p>

            <ul className={styles.bulleted}>
              <li>Learning style analysis</li>
              <li>Subject Assessment</li>
              <li>Goal Setting</li>
              <li>Personalized Insights</li>
            </ul>
          </div>
        </div>

        <div className={styles.imageStack}>
          <img
            className={styles.img1}
            src="https://placehold.co/498x494"
            alt="student placeholder"
          />
        </div>
      </section>

      {/* Parents section: single image left, text right (inverted) */}
      <section className={styles.section}>
        <div className={styles.imageStack}>
          <img
            className={styles.img1}
            src="https://placehold.co/498x494"
            alt="parents placeholder"
          />
        </div>

        <div className={`${styles.left} ${styles.right}`}>
          <div className={styles.pill}>
            <div className={styles.pillText}>Step 2</div>
          </div>

          <div className={styles.title}>Get Matched with Expert Tutors</div>

          <div className={styles.body}>
            <p>
              Our AI-powered system finds 3-5 perfect tutor matches based on your assessment results and preferences.
            </p>

            <ul className={styles.bulleted}>
              <li>AI-powered Matching</li>
              <li>Multiple Tutor Options</li>
              <li>Compatibility Scoring</li>
              <li>Schedule Alignment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tutors section: text left with single image right */}
      <section className={styles.section}>
        <div className={styles.left}>
          <div className={styles.pill}>
            <div className={styles.pillText}>Step 3</div>
          </div>

          <div className={styles.title}>Start Your Learning Journey</div>

          <div className={styles.tutorBody}>
            <p>
              Begin with a free demo session, then continue with personalized tutoring sessions and track your progress.
            </p>

            <ul className={styles.bulleted}>
              <li>Free Demo Session</li>
              <li>Flexible Scheduling</li>
              <li>Track Your Progress</li>
              <li>Ongoing Support</li>
            </ul>
          </div>
        </div>

        <div className={styles.imageStack}>
          <img
            className={styles.img1}
            src="https://placehold.co/498x494"
            alt="tutor placeholder"
          />
        </div>
      </section>
    </div>
  )
}

export default HowItWorksUser
