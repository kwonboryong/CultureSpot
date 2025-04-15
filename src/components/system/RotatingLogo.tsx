'use client';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type LogoVariant = 'headerLogo' | 'authLogo';

interface RotatingLogoProps {
  isAnimating?: boolean;
  variant?: LogoVariant;
}

const RotatingLogo = ({
  isAnimating = false,
  variant = 'headerLogo',
}: RotatingLogoProps) => {
  const controls = useAnimation();

  const sizeClass = clsx({
    'w-8 m-3': variant === 'headerLogo',
    'w-44 m-11': variant === 'authLogo',
  });

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
