import React from 'react';
import styles from './Steps.module.css';
import ladder from '../assets/ladder.png';
import { useScrollAnimation } from '../hooks/useParallax';

const Steps: React.FC = () => {
  const { isVisible: titleVisible, ref: titleRef } = useScrollAnimation(0.2);
  const { isVisible: imageVisible, ref: imageRef } = useScrollAnimation<HTMLImageElement>(0.1);

  return (
    <section className={styles.section} aria-hidden="true">
      <div className={styles.inner}>
        <h1
          ref={titleRef}
          className={`${styles.heroTitle} ${titleVisible ? styles.slideInTitle : ''}`}
        >
          Start Improving Your Grades in Minutes
        </h1>

        <div className={styles.row}>
          <div className={styles.leftColumn}>
            <StepItem
              number="01"
              title="Tell Us What You Need"
              description="Answer a few questions about your subjects, grade level, and learning goals. Takes less than 60 seconds."
              delay={0.1}
              isBlock={true}
            />
            <StepItem
              number="02"
              title="Meet Your Perfect Tutor"
              description="We'll match you with pre-screened tutors who specialize in your subjects. Review profiles, ratings, and teaching styles before you choose."
              delay={0.2}
            />
            <StepItem
              number="03"
              title="Book Your First Session"
              description="Schedule a session at your convenience. Connect through video chat with all the tools you need for effective learning."
              delay={0.3}
            />
            <StepItem
              number="04"
              title="Watch Yourself Improve"
              description="Track your progress after each session. See your grades improve and confidence grow with continuous support."
              delay={0.4}
            />
          </div>

          <img
            ref={imageRef}
            className={`${styles.ladder} ${imageVisible ? styles.slideInImage : ''}`}
            src={ladder}
            alt="ladder graphic"
          />
        </div>
      </div>
    </section>
  );
};

interface StepItemProps {
  number: string;
  title: string;
  description: string;
  delay: number;
  isBlock?: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, description, delay, isBlock = false }) => {
  const { isVisible, ref } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`${isBlock ? styles.block : ''} ${isVisible ? styles.slideInStep : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.rowTitle}>
        <span className={styles.badge}>{number}</span>
        <div className={isBlock ? styles.blockTitle : styles.stepTitle}>{title}</div>
      </div>
      <div className={isBlock ? styles.blockDesc : styles.stepDesc}>{description}</div>
    </div>
  );
};

export default Steps;
