'use client';

import { useState, useEffect } from 'react';

const useWindowWidth = (): number | undefined => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

// custom breakpoints for screen to make component responsive
const BreakPoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export { useWindowWidth, BreakPoints };
