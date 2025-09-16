import React from 'react';
import styles from './Steps.module.css';
import ladder from '../assets/ladder.png';

const Steps: React.FC = () => {
  return (
    <section className={styles.section} aria-hidden="true">
      <div className={styles.inner}>
        <h1 className={styles.heroTitle}>Start Improving Your Grades in Minutes</h1>

        <div className={styles.row}>
          <div className={styles.leftColumn}>
            <div className={styles.block}>
              <div className={styles.rowTitle}>
                <span className={styles.badge}>01</span>
                <div className={styles.blockTitle}>Tell Us What You Need</div>
              </div>
              <div className={styles.blockDesc}>Answer a few questions about your subjects, grade level, and learning goals. Takes less than 60 seconds.</div>
            </div>

            <div>
              <div className={styles.rowTitle}>
                <span className={styles.badge}>02</span>
                <div className={styles.stepTitle}>Meet Your Perfect Tutor</div>
              </div>
              <div className={styles.stepDesc}>We'll match you with pre-screened tutors who specialize in your subjects. Review profiles, ratings, and teaching styles before you choose.</div>
            </div>

            <div>
              <div className={styles.rowTitle}>
                <span className={styles.badge}>03</span>
                <div className={styles.stepTitle}>Book Your First Session</div>
              </div>
              <div className={styles.stepDesc}>Schedule a session at your convenience. Connect through video chat with all the tools you need for effective learning.</div>
            </div>

            <div>
              <div className={styles.rowTitle}>
                <span className={styles.badge}>04</span>
                <div className={styles.stepTitle}>Watch Yourself Improve</div>
              </div>
              <div className={styles.stepDesc}>Track your progress after each session. See your grades improve and confidence grow with continuous support.</div>
            </div>
          </div>

          <img className={styles.ladder} src={ladder} alt="ladder graphic" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
