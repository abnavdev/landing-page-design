import { useState, useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', offset = 0 } = options;
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      let translateX = 0;
      let translateY = 0;

      switch (direction) {
        case 'up':
          translateY = rate + offset;
          break;
        case 'down':
          translateY = -rate + offset;
          break;
        case 'left':
          translateX = rate + offset;
          break;
        case 'right':
          translateX = -rate + offset;
          break;
      }

      setTransform(`translate3d(${translateX}px, ${translateY}px, 0)`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, offset]);

  return { transform, ref: elementRef };
};

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return { isVisible, ref: elementRef };
};

export const useParallaxBackground = (speed = 0.3) => {
  const [backgroundPosition, setBackgroundPosition] = useState('center top');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const yPos = -(scrolled * speed);
      setBackgroundPosition(`center ${yPos}px`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return backgroundPosition;
};
