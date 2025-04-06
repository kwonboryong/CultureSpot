'use client';
import { motion } from 'framer-motion';

interface RotatingLogoProps {
  isAnimating?: boolean;
  variant?: LogoVariant;
}

type LogoVariant = 'headerLogo' | 'authLogo';

const sizeVariants: Record<LogoVariant, string> = {
  headerLogo: 'w-8 m-3',
  authLogo: 'w-44 m-11',
};

const RotatingLogo = ({
  isAnimating = false,
  variant = 'headerLogo',
}: RotatingLogoProps) => {
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
