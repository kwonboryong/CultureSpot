'use client';

import Link from 'next/link';
import Icon from '@/icons/Icon';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { SidebarItem } from '@/constants/sidebarItems';
import dynamic from 'next/dynamic';

const SidebarProfile = dynamic(() => import('./SidebarProfile'));

type SidebarProps = {
  currentUrl: string;
  sidebarItems: SidebarItem[];
  initialIndex?: null | number;
  isSidebarOpen: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const SidebarContent = ({
  currentUrl,
  sidebarItems,
  initialIndex = null,
  isSidebarOpen,
  onClose,
  ...rest
}: SidebarProps) => {
  return (
    <>
      <aside
        className='fixed left-0 top-[80px] z-40 h-lvh w-fit bg-bg'
        {...rest}
      >
        <ul className='w-[90px]'>
          {currentUrl.startsWith('/my') && (
            <SidebarProfile isCollapsed={true} />
          )}
          {sidebarItems.map(({ iconName, label, url }, index) => {
            const isActive =
              url === '/' ? url === currentUrl : currentUrl.startsWith(url);
            return (
              <li key={index} className='py-2 font-semibold text-text-sub'>
                <Link
                  href={url}
                  className='gap-x-15 group flex h-[50px] w-[90px] items-center justify-start px-[20px]'
                >
                  <div className='flex w-[50px] flex-col items-center justify-start gap-y-1'>
                    <Icon
                      name={iconName}
                      size={22}
                      className={cn(
                        'stroke-[2px] group-hover:stroke-primary',
                        isActive ? 'stroke-primary' : 'stroke-text-sub'
                      )}
                    />
                    <p
                      className={clsx(
                        'text-caption group-hover:text-primary',
                        isActive && 'text-primary'
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-screen bg-bg transition-transform duration-300 ease-in-out',
          isSidebarOpen ? '-translate-x-full' : 'translate-x-0'
        )}
        {...rest}
      >
        <header className='flex h-20 items-center bg-bg'>
          <div className='flex w-[220px] gap-10 px-[24px]'>
            <button
              onClick={onClose}
              className='rounded-full p-[12px] hover:bg-black/10'
            >
              <Icon
                name='CLOSE'
                size={18}
                className='stroke-text-sub stroke-[2px]'
              />
            </button>
          </div>
        </header>
        <ul className='w-[220px] px-[10px] transition-all duration-300'>
          {currentUrl.startsWith('/my') && (
            <SidebarProfile isCollapsed={false} />
          )}
          {sidebarItems.map(({ iconName, label, url }, index) => {
            const isActive =
              url === '/' ? url === currentUrl : currentUrl.startsWith(url);

            return (
              <li
                key={index}
                className={cn(
                  isActive && 'bg-primary-main100',
                  'w-full rounded-10 font-semibold text-text-sub hover:bg-primary-main100'
                )}
                onClick={onClose}
              >
                <Link
                  href={url}
                  className='group flex h-[50px] w-full items-center justify-start gap-x-[16px] px-[10px]'
                >
                  <div className='flex w-[50px] flex-col items-center justify-start'>
                    <Icon
                      name={iconName}
                      size={22}
                      className={cn(
                        'stroke-[2px] group-hover:stroke-primary',
                        isActive ? 'stroke-primary' : 'stroke-text-sub'
                      )}
                    />
                  </div>

                  <p
                    className={cn(
                      'group-hover:text-primary',
                      isActive && 'text-primary',
                      'opacity-100 transition-opacity duration-500'
                    )}
                  >
                    {label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default SidebarContent;
