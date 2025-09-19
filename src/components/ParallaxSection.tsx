import React, { ReactNode } from 'react';
import { useParallax, useScrollAnimation } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  enableAnimation?: boolean;
  animationThreshold?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.1,
  direction = 'up',
  className = '',
  enableAnimation = true,
  animationThreshold = 0.1
}) => {
  const { transform, ref: parallaxRef } = useParallax({ speed, direction });
  const { isVisible, ref: animationRef } = useScrollAnimation(animationThreshold);

  // Combine refs
  const setRefs = (element: HTMLElement | null) => {
    if (parallaxRef) parallaxRef.current = element;
    if (animationRef) animationRef.current = element;
  };

  return (
    <div
      ref={setRefs}
      className={`${className} ${enableAnimation && isVisible ? 'parallax-visible' : ''}`}
      style={{ 
        transform,
        transition: enableAnimation ? 'opacity 0.8s ease-out, transform 0.8s ease-out' : 'none'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
