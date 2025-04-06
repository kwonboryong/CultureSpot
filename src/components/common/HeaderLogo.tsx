'use client';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const HeaderLogo = () => {
  const controls = useAnimation();
  const [, setIsHover] = useState(false);

  const startRotate = () => {
    setIsHover(true);

    controls.start({
      rotateY: [0, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'backInOut',
      },
    });
  };

  const stopRotate = () => {
    setIsHover(false);

    controls.stop();
    controls.set({ rotateY: 0 });
  };

  return (
    <motion.div
      className='flex items-center cursor-pointer'
      onMouseEnter={startRotate}
      onMouseLeave={stopRotate}
    >
      <motion.img
        src='/assets/logo-icon.svg'
        alt='CultureSpot 로고 아이콘'
        className='w-8 m-3'
        animate={controls}
      />
      <img
        src='/assets/title.svg'
        alt='CultureSpot 텍스트 로고'
        className='w-[170px]'
      />
    </motion.div>
  );
};

export default HeaderLogo;
