'use client';
import '../../styles/globals.css';
import React from 'react';
import { motion } from 'framer-motion';

// export const metadata = {
//   title: '로그인 - My Next.js App',
//   description: '로그인하여 더 많은 서비스를 이용해보세요.',
// };

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='flex justify-center'>
        <main className='mt-[18vh] flex w-full flex-col items-center'>
          <img src='/assets/Logo.svg' alt='CultureSpot 로고' />
          <p className='pt-4 caret-transparent'>
            로그인 후 더 많은 서비스를 사용해보세요
          </p>
          <motion.img
            src='/assets/logo-icon.svg'
            alt='CultureSpot 로고 아이콘'
            className='no-cursor m-9 w-44'
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
          {children}
        </main>
      </body>
    </html>
  );
}
