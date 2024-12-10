import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export type ScreenType = 'mobile' | 'tablet' | 'desktop' | null;

const useResize = () => {
  const [screenType, setScreenType] = useState<ScreenType>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = debounce(() => {
      const currentWidth = window.innerWidth;

      if (currentWidth >= 1024) {
        setScreenType('desktop');
      } else if (currentWidth >= 768) {
        setScreenType('tablet');
      } else {
        setScreenType('mobile');
      }
    }, 200);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return screenType;
};

export default useResize;
