'use client';

import Header from '@/components/common/navbar/Header';
import React, { useState } from 'react';
import Sidebar from '@/components/common/navbar/Sidebar';
import {
  GENERAL_SIDEBAR_ITEMS,
  MYPAGE_SIDEBAR_ITEMS,
} from '@/constants/sidebarItems';
import { usePathname } from 'next/navigation';

const NavigationBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar
        currentUrl={pathname}
        sidebarItems={
          pathname.startsWith('/my')
            ? MYPAGE_SIDEBAR_ITEMS
            : GENERAL_SIDEBAR_ITEMS
        }
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className='z-40 pl-[90px] pt-[80px]'>
        <div className='px-[15px] lg:px-[40px]'>{children}</div>
      </div>
    </div>
  );
};

export default NavigationBar;
