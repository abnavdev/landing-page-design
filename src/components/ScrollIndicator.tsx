import React, { useState, useEffect } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`${styles.scrollIndicator} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.progressRing}>
        <svg className={styles.progressSvg} width="60" height="60">
          <circle
            className={styles.progressBackground}
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />
          <circle
            className={styles.progressBar}
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="#0056b3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 25}`}
            strokeDashoffset={`${2 * Math.PI * 25 * (1 - scrollProgress / 100)}`}
            transform="rotate(-90 30 30)"
          />
        </svg>
        <button className={styles.scrollButton} onClick={scrollToTop} aria-label="Scroll to top">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4L4 12H8V20H16V12H20L12 4Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ScrollIndicator;
