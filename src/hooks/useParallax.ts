import { useState, useEffect, useRef, useCallback } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

export const useParallax = <T extends HTMLElement = HTMLDivElement>(options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', offset = 0 } = options;
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');
  const elementRef = useRef<T | null>(null) as React.MutableRefObject<T | null>;
  const rafRef = useRef<number | undefined>(undefined);

  const handleScroll = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Calculate element's position relative to viewport
    // When element is at bottom of viewport: ratio = 1
    // When element is at top of viewport: ratio = -1
    const elementCenter = elementTop + elementHeight / 2;
    const windowCenter = windowHeight / 2;
    const ratio = (elementCenter - windowCenter) / windowCenter;
    
    // Calculate parallax offset based on element position
    const parallaxOffset = ratio * speed * 100;

    let translateX = 0;
    let translateY = 0;

    switch (direction) {
      case 'up':
        // Elements move up slower than scroll (positive value when scrolling down)
        translateY = parallaxOffset + offset;
        break;
      case 'down':
        // Elements move down slower than scroll (negative value when scrolling down)
        translateY = -parallaxOffset + offset;
        break;
      case 'left':
        translateX = parallaxOffset + offset;
        break;
      case 'right':
        translateX = -parallaxOffset + offset;
        break;
    }

    setTransform(`translate3d(${translateX}px, ${translateY}px, 0)`);
  }, [speed, direction, offset]);

  useEffect(() => {
    const handleScrollThrottled = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Schedule new animation frame
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    // Initial calculation
    handleScroll();
    
    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    window.addEventListener('resize', handleScrollThrottled, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      window.removeEventListener('resize', handleScrollThrottled);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return { transform, ref: elementRef };
};

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  // Use MutableRefObject so callers can assign to `ref.current` safely
  const elementRef = useRef<T | null>(null) as React.MutableRefObject<T | null>;
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate once unless you want repeated animations
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          // Optionally disconnect after first animation
          // observer.disconnect();
        }
      },
      observerOptions
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { isVisible, ref: elementRef };
};

export const useParallaxBackground = (speed = 0.3) => {
  const [backgroundPosition, setBackgroundPosition] = useState('center 0px');
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      // Negative value makes background move slower than scroll
      const yPos = scrolled * speed;
      setBackgroundPosition(`center ${-yPos}px`);
    };

    const handleScrollThrottled = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed]);

  return backgroundPosition;
};