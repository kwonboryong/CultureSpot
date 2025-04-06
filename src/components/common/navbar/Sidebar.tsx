'use client';

import Link from 'next/link';
import Icon from '@/icons/Icon';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { SidebarItem } from '@/constants/sidebarItems';
import SidebarContent from '@/components/common/navbar/SidebarContent';
import dynamic from 'next/dynamic';

const SidebarProfile = dynamic(() => import('./SidebarProfile'));

type SidebarProps = {
  currentUrl: string;
  sidebarItems: SidebarItem[];
  initialIndex?: null | number;
  isSidebarOpen: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Sidebar = ({
  currentUrl,
  sidebarItems,
  initialIndex = null,
  isSidebarOpen,
  onClose,
  ...rest
}: SidebarProps) => {
  return (
    <div className='z-[60]' {...rest}>
      <div
        className={cn(
          'fixed inset-0 z-50 bg-bg-dark500 transition-opacity duration-300',
          isSidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />
      <SidebarContent
        currentUrl={currentUrl}
        sidebarItems={sidebarItems}
        initialIndex={initialIndex}
        onClose={onClose}
        isSidebarOpen={!isSidebarOpen}
      />
    </div>
  );
};

export default Sidebar;
