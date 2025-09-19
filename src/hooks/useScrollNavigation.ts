import { useState, useEffect, useRef } from 'react';

// Custom hook for scroll-based navigation visibility
const useScrollNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      // Track if scrolled
      setHasScrolled(scrollY > 10);
      
      // Show navbar when at the very top
      if (scrollY < 10) {
        setIsVisible(false);
        setIsHidden(false);
      }
      // Hide when scrolling down
      else if (scrollY > lastScrollY.current && scrollY > 100) {
        setIsVisible(false);
        setIsHidden(true);
      }
      // Show when scrolling up
      else if (scrollY < lastScrollY.current) {
        setIsVisible(true);
        setIsHidden(false);
      }
      
      lastScrollY.current = scrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isVisible, isHidden, hasScrolled };
};export default useScrollNavigation;