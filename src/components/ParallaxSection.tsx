import React, { useCallback } from 'react';
import type { ReactNode } from 'react';
import { useParallax, useScrollAnimation } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  enableAnimation?: boolean;
  animationThreshold?: number;
  offset?: number;
  as?: React.ElementType;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.3, // Reduced default speed for subtler effect
  direction = 'up',
  className = '',
  enableAnimation = true,
  animationThreshold = 0.1,
  offset = 0,
  as: Component = 'div'
}) => {
  const { transform, ref: parallaxRef } = useParallax({ speed, direction, offset });
  const { isVisible, ref: animationRef } = useScrollAnimation(animationThreshold);

  // Combine refs using callback ref pattern
  const setRefs = useCallback((element: HTMLDivElement | null) => {
    if (parallaxRef) {
      parallaxRef.current = element;
    }
    if (animationRef) {
      animationRef.current = element;
    }
  }, [parallaxRef, animationRef]);

  // Build animation classes
  const animationClass = enableAnimation 
    ? isVisible 
      ? 'parallax-visible' 
      : 'parallax-hidden'
    : '';

  // Combine all classes
  const combinedClassName = [className, animationClass]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={setRefs}
      className={combinedClassName}
      style={{ 
        transform,
        willChange: 'transform', // Optimize for animations
        transition: enableAnimation 
          ? 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' 
          : 'none'
      }}
    >
      {children}
    </Component>
  );
};

export default ParallaxSection;