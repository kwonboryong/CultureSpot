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
  isCollapsed?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Sidebar({
  currentUrl,
  sidebarItems,
  initialIndex = null,
  isCollapsed = false,
  ...rest
}: SidebarProps) {
  return (
    <aside className='h-lvh w-fit bg-bg' {...rest}>
      <ul className={cn(isCollapsed ? 'w-[90px]' : 'w-[200px]')}>
        {currentUrl.startsWith('/my') && (
          <SidebarProfile isCollapsed={isCollapsed} />
        )}
        {sidebarItems.map(({ iconName, label, url }, index) => (
          <li
            key={index}
            className={cn(
              !isCollapsed &&
                currentUrl.startsWith(url) &&
                'bg-primary-main100',
              !isCollapsed && 'hover:bg-primary-main100',
              'font-semibold text-text-sub'
            )}
          >
            <Link
              href={url}
              className={cn(
                'gap-x-15 group flex h-[50px] items-center justify-start px-[20px]',
                isCollapsed ? 'w-[90px]' : 'w-[200px]'
              )}
            >
              <div className='flex w-[50px] flex-col items-center justify-start'>
                <Icon
                  name={iconName}
                  size={18}
                  className={cn(
                    'stroke-[2px] group-hover:stroke-primary',
                    currentUrl.startsWith(url)
                      ? 'stroke-primary'
                      : 'stroke-text-sub'
                  )}
                />
                {isCollapsed && (
                  <p
                    className={clsx(
                      'text-caption group-hover:text-primary',
                      currentUrl.startsWith(url) && 'text-primary'
                    )}
                  >
                    {label}
                  </p>
                )}
              </div>
              {!isCollapsed && (
                <p
                  className={cn(
                    'group-hover:text-primary',
                    currentUrl.startsWith(url) && 'text-primary'
                  )}
                >
                  {label}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
