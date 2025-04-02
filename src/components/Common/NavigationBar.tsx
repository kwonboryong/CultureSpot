'use client';

import Header from '@/components/common/Header';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/common/Sidebar';
import {
  GENERAL_SIDEBAR_ITEMS,
  MYPAGE_SIDEBAR_ITEMS,
} from '@/constants/sidebarItems';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const NavigationBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
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
        className='fixed left-0 top-20 z-50'
        isCollapsed={isCollapsed}
      />
      <div
        className={cn(
          isCollapsed ? 'pl-[90px]' : 'pl-[200px]',
          'pt-[80px]',
          'z-40'
        )}
      >
        <div className='p-[40px]'>{children}</div>
      </div>
    </div>
  );
};

export default NavigationBar;
