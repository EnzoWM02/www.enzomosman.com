import { useEffect, useState } from 'react';

export type LayoutContext = {
  isLowRes: boolean;
  mobileBreakpoint: boolean;
}

export function useLayoutContext(): LayoutContext {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLowRes = windowWidth < 1300;
  const mobileBreakpoint = windowWidth < 600;

  return { isLowRes, mobileBreakpoint };
}
