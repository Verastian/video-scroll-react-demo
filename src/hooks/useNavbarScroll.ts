import { useState, useEffect } from 'react';

/**
 * Returns true when the window has scrolled past `threshold` pixels.
 * Uses a passive scroll listener for optimal performance.
 */
export function useNavbarScroll(threshold = 40): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
