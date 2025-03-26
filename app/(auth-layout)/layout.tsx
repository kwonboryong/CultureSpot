import '@/styles/globals.css';
import React from 'react';
import LogoAnimation from '@/components/common/LogoAnimation';

export const metadata = {
  title: '로그인 - My Next.js App',
  description: '로그인하여 더 많은 서비스를 이용해보세요.',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ko'>
      <body className='flex justify-center'>
        <main className='mt-[18vh] flex w-full flex-col items-center caret-transparent'>
          <img src='/assets/Logo.svg' alt='CultureSpot 로고' />
          <p className='pt-4'>로그인 후 더 많은 서비스를 사용해보세요</p>
          <LogoAnimation />
          {children}
        </main>
      </body>
    </html>
  );
};

export default AuthLayout;
