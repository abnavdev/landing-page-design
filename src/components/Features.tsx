import React from 'react';
import styles from './Features.module.css';
import { useScrollAnimation, useParallax } from '../hooks/useParallax';
import tutorsIcon from '../assets/tutors.svg';
import learningIcon from '../assets/learning.svg';
import progressIcon from '../assets/progress.svg';
import schedulingIcon from '../assets/scheduling.svg';
import toolsIcon from '../assets/tools.svg';
import safetyIcon from '../assets/safety.svg';

const Features: React.FC = () => {
  const { isVisible: titleVisible, ref: titleRef } = useScrollAnimation(0.2);
  const { transform: parallaxTransform, ref: parallaxRef } = useParallax({ speed: 0.2, direction: 'up' });

  return (
    <section className={styles.features} ref={parallaxRef} style={{ transform: parallaxTransform }}>
      <div className={styles.content}>
        <h2
          ref={titleRef}
          className={`${styles.title} ${titleVisible ? styles.slideInTitle : ''}`}
        >
          Everything You Need to Succeed in One Platform
        </h2>
        <div className={styles.grid}>
          <FeatureCard
            icon={tutorsIcon}
            title="Expert Tutors"
            description="Verified Subject ExpertsEvery tutor is background-checked, degree-verified, and rated by students. We match you with tutors who specialize in your exact curriculum and learning needs."
            delay={0.1}
          />
          <FeatureCard
            icon={learningIcon}
            title="Personalized Learning"
            description="Tailored to Your Pace. Our AI-powered system adapts to your learning style, identifying knowledge gaps and creating custom study plans that actually work for you."
            delay={0.2}
          />
          <FeatureCard
            icon={progressIcon}
            title="Real-Time Progress"
            description="Track Every Milestone. See your improvement with detailed analytics. Know exactly where you stand and what to focus on next with actionable insights after every session."
            delay={0.3}
          />
          <FeatureCard
            icon={schedulingIcon}
            title="Flexible Scheduling"
            description="Learn on Your Schedule. Book sessions when you need them - whether it's late-night homework help or weekend exam prep. Your tutor is available when you are."
            delay={0.4}
          />
          <FeatureCard
            icon={toolsIcon}
            title="Interactive Tools"
            description="Engaging Learning Experience. Collaborate with screen sharing, digital whiteboards, file uploads, and instant messaging. Learning online feels just like being there in person."
            delay={0.5}
          />
          <FeatureCard
            icon={safetyIcon}
            title="Complete Safety"
            description="Protected Learning Environment. All sessions are monitored for safety. Secure payments, encrypted communications, and verified users ensure peace of mind for parents and students."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const { isVisible, ref } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.slideInCard : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <img src={icon} alt={title} className={styles.icon} />
      
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Features;