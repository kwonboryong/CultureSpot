'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type LogoVariant = 'headerLogo' | 'authLogo';

const sizeVariants: Record<LogoVariant, string> = {
  headerLogo: 'w-8 m-3',
  authLogo: 'w-44 m-11',
};

interface RotatingLogoProps {
  isAnimating?: boolean;
  variant?: LogoVariant;
}

const RotatingLogo = ({
  isAnimating = false,
  variant = 'headerLogo',
}: RotatingLogoProps) => {
  const controls = useAnimation();
  const sizeClass = sizeVariants[variant];

  useEffect(() => {
    controls.start(
      isAnimating
        ? {
            rotateY: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'backInOut',
            },
          }
        : {
            rotateY: 0,
            transition: { duration: 1, ease: 'easeOut' },
          }
    );
  }, [isAnimating, controls]);

  return (
    <motion.img
      src='/assets/logos/logo-icon.svg'
      alt='CultureSpot 로고 아이콘'
      className={sizeClass}
      animate={controls}
    />
  );
};

export default RotatingLogo;
