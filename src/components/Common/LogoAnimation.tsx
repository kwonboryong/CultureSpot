'use client';
import { motion } from 'framer-motion';

const LogoAnimation = () => {
  return (
    <motion.img
      src='/assets/logo-icon.svg'
      alt='CultureSpot 로고 아이콘'
      className='m-11 w-44'
      animate={{
        rotateY: [0, 360],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'backInOut',
      }}
    />
  );
};

export default LogoAnimation;
