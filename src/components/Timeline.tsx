import React from 'react';
import styles from './Timeline.module.css';
import { useScrollAnimation } from '../hooks/useParallax';

const Steps: React.FC = () => {
  const { isVisible: titleVisible, ref: titleRef } = useScrollAnimation(0.2);
  const { isVisible: imageVisible, ref: imageRef } = useScrollAnimation<HTMLImageElement>(0.1);

  return (
    <section className={styles.section} aria-hidden="true">
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <h1
            ref={titleRef}
            className={`${styles.heroTitle} ${titleVisible ? styles.slideInTitle : ''}`}
          >
            Our Journey
          </h1>
          <p className={styles.subtitle}>
            From a simple idea to transforming thousands of student lives - here's how we've grown.
          </p>
        </div>


        <div className={styles.row}>
          <div className={styles.leftColumn}>
            <StepItem
              number="01"
              title="2022 - Ferryly Founded"
              description="Started with a vision to democratize quality education and make expert tutoring accessible to all."
              delay={0.1}
              isBlock={true}
            />
            <StepItem
              number="02"
              title="2023 - 1,000 Students"
              description="Reached our first major milestone of helping 1,000 students improve their academic performance.."
              delay={0.2}
            />
            <StepItem
              number="03"
              title="2024 - AI Integration"
              description="Launched our AI-powered matching system for personalized tutor-student connections."
              delay={0.3}
            />
            <StepItem
              number="04"
              title="2024 - 10,000+ Students"
              description="Celebrated helping over 10,000 students achieve their academic goals and dream college admissions."
              delay={0.4}
            />
          </div>

          <img
            ref={imageRef}
            className={`${styles.ladder} ${imageVisible ? styles.slideInImage : ''}`}
            src="/group-641.png"
            alt="journey illustration"
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
