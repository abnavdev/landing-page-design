import React from 'react'
import styles from '../styles/User.module.css'

const User: React.FC = () => {

  return (
    <div className={styles.wrapper}>
      {/* Students section: text left, images right */}
      <section className={styles.section}>
  <div className={styles.left}>
          <div className={styles.pill}>
            <div className={styles.pillText}>For Students</div>
          </div>

          <div className={styles.title}>Get the Grades You Deserve</div>

          <div className={styles.body}>
            <p>
              Master difficult concepts with one-on-one attention. Whether it's catching up, keeping up, or
              getting ahead, your tutor creates a learning plan just for you. No more struggling alone with
              homework or feeling lost in class.
            </p>

            <ul className={styles.bulleted}>
              <li>Instant homework help when you're stuck</li>
              <li>Exam preparation that actually works</li>
              <li>Build confidence in challenging subjects</li>
              <li>Learn at your own pace without judgment</li>
            </ul>
          </div>
        </div>

        <div className={styles.imageStack}>
          <img
            className={styles.img1}
            src="https://placehold.co/498x494"
            alt="placeholder large"
          />

          <img
            className={styles.img2}
            src="https://placehold.co/346x284"
            alt="placeholder small"
          />
        </div>
      </section>

      {/* Parents section: images left, text right (inverted) */}
    <section className={styles.section}>
        <div className={styles.imageStack}>
          <img
            className={styles.img1}
            src="https://placehold.co/498x494"
            alt="placeholder large"
          />

          <img
            className={styles.img2}
            src="https://placehold.co/346x284"
            alt="placeholder small"
          />
        </div>

  <div className={`${styles.left} ${styles.right}`}>
          <div className={styles.pill}>
            <div className={styles.pillText}>For Parents</div>
          </div>

          <div className={styles.title}>Support Your Child's Success</div>

          <div className={styles.body}>
            <p>
              Know exactly how your child is progressing with transparent reporting and regular updates.
              Communicate directly with tutors and see the improvement in real-time. Invest in their future
              with confidence.
            </p>

            <ul className={styles.bulleted}>
              <li>Weekly progress reports delivered to your inbox</li>
              <li>Direct communication with qualified tutors</li>
              <li>Safe, monitored learning environment</li>
              <li>Affordable plans that fit your budget</li>
            </ul>
          </div>
        </div>
      </section>

       {/* Tutors section: text left (inverted relative to parents) */}
      <section className={styles.section}>
        <div className={styles.left}>
          <div className={styles.pill}>
            <div className={styles.pillText}>For tutors</div>
          </div>

          <div className={styles.title}>Share Your Knowledge, Grow Your Income</div>

          <div className={styles.tutorBody}>
            <p>
              Turn your expertise into opportunity. Set your own schedule, choose your students, and teach subjects you're passionate about. We handle the technology and payments so you can focus on teaching.
            </p>

            <ul className={styles.bulleted}>
              <li>Earn $30-80 per hour teaching online</li>
              <li>Work from anywhere with flexible hours</li>
              <li>Access to teaching resources and support</li>
              <li>Build your reputation with student reviews</li>
            </ul>
          </div>
        </div>
        <div className={styles.imageStack}>
          <img
            className={styles.img1}
            src="https://placehold.co/498x494"
            alt="placeholder large"
          />

          <img
            className={styles.img2}
            src="https://placehold.co/346x284"
            alt="placeholder small"
          />
        </div>
      </section>
      
      
    </div>
  )
}

export default User
