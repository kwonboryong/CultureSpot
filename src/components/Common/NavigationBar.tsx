'use client';

import Header from 'src/components/common/Header';
import React, { useState, useEffect } from 'react';
import Sidebar from 'src/components/common/Sidebar';
import {
  GENERAL_SIDEBAR_ITEMS,
  MYPAGE_SIDEBAR_ITEMS,
} from 'src/constants/sidebarItems';
import { cn } from 'src/lib/utils';
import { usePathname } from 'next/navigation';

export default function NavigationBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebar() {
    setIsCollapsed((prev) => !prev);
  }

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
        className='fixed left-0 top-20'
        isCollapsed={isCollapsed}
      />
      <div
        className={cn(isCollapsed ? 'pl-[90px]' : 'pl-[200px]', 'pt-[80px]')}
      >
        {children}
      </div>
    </div>
  );
}
