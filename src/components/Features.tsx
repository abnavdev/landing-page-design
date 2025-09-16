import React from 'react';
import styles from './Features.module.css';
import tutorsIcon from '../assets/tutors.svg';
import learningIcon from '../assets/learning.svg';
import progressIcon from '../assets/progress.svg';
import schedulingIcon from '../assets/scheduling.svg';
import toolsIcon from '../assets/tools.svg';
import safetyIcon from '../assets/safety.svg';

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.content}>
        <h2 className={styles.title}>Everything You Need to Succeed in One Platform</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={tutorsIcon} alt="Expert Tutors" className={styles.icon} />
            <h3 className={styles.cardTitle}>Expert Tutors</h3>
            <p className={styles.cardDescription}>
              Every tutor is background-checked, degree-verified, and rated by students. We match you with tutors who specialize in your exact curriculum and learning needs.
            </p>
          </div>
          <div className={styles.card}>
            <img src={learningIcon} alt="Personalized Learning" className={styles.icon} />
            <h3 className={styles.cardTitle}>Personalized Learning</h3>
            <p className={styles.cardDescription}>
              Tailored to Your Pace. Our AI-powered system adapts to your learning style, identifying knowledge gaps and creating custom study plans that actually work for you.
            </p>
          </div>
          <div className={styles.card}>
            <img src={progressIcon} alt="Real-Time Progress" className={styles.icon} />
            <h3 className={styles.cardTitle}>Real-Time Progress</h3>
            <p className={styles.cardDescription}>
              Track Every Milestone. See your improvement with detailed analytics. Know exactly where you stand and what to focus on next with actionable insights after every session.
            </p>
          </div>
          <div className={styles.card}>
            <img src={schedulingIcon} alt="Flexible Scheduling" className={styles.icon} />
            <h3 className={styles.cardTitle}>Flexible Scheduling</h3>
            <p className={styles.cardDescription}>
              Learn on Your Schedule. Book sessions when you need them - whether it's late-night homework help or weekend exam prep. Your tutor is available when you are.
            </p>
          </div>
          <div className={styles.card}>
            <img src={toolsIcon} alt="Interactive Tools" className={styles.icon} />
            <h3 className={styles.cardTitle}>Interactive Tools</h3>
            <p className={styles.cardDescription}>
              Engaging Learning Experience. Collaborate with screen sharing, digital whiteboards, file uploads, and instant messaging. Learning online feels just like being there in person.
            </p>
          </div>
          <div className={styles.card}>
            <img src={safetyIcon} alt="Complete Safety" className={styles.icon} />
            <h3 className={styles.cardTitle}>Complete Safety</h3>
            <p className={styles.cardDescription}>
              Protected Learning Environment. All sessions are monitored for safety. Secure payments, encrypted communications, and verified users ensure peace of mind for parents and students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;