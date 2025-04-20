'use client';
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        className='fixed bottom-10 right-5 rounded-full bg-red-300 p-3 text-white shadow-lg transition-all duration-300 hover:bg-gray-700 focus:outline-none'
        onClick={handleScrollToTop}
      >
        <MdKeyboardDoubleArrowUp className='text-2xl' />
      </button>
    )
  );
};

export default ScrollToTop;
