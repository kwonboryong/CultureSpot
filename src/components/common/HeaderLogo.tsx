'use client';
import { useState } from 'react';
import RotatingLogo from '../system/RotatingLogo';

const HeaderLogo = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className='flex items-center cursor-pointer'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <RotatingLogo isAnimating={isHovering} variant='headerLogo' />
      <img
        src='/assets/logos/title.svg'
        alt='CultureSpot 텍스트 로고'
        className='w-[170px]'
      />
    </div>
  );
};

export default HeaderLogo;
