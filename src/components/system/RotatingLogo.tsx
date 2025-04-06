'use client';
import { motion } from 'framer-motion';

const sizeVariants = {
  headerLogo: 'w-8 m-3',
  authLogo: 'w-44 m-11',
};

const RotatingLogo = ({ isAnimating = false, variant = 'headerLogo' }) => {
  const sizeClass = sizeVariants[variant] || sizeVariants.headerLogo;

  return (
    <motion.img
      src='/assets/logo-icon.svg'
      alt='CultureSpot 로고 아이콘'
      className={sizeClass}
      animate={isAnimating ? { rotateY: [0, 360] } : { rotateY: 0 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'backInOut',
      }}
    />
  );
};

export default RotatingLogo;
