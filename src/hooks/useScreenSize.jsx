const { useState, useEffect } = require('react');

const useScreenSize = (delay = 200) => {
  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window === 'undefined')
      return {
        width: 0,
        height: 0,
      };

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  useEffect(() => {
    let timeOut;

    const handleResize = () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeOut);
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return screenSize;
};

export default useScreenSize;
