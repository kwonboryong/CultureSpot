'use client';

import Link from 'next/link';
import Icon from '../Icons/Icon';
import { HTMLAttributes, useState } from 'react';
import { cn } from 'src/lib/utils';
import clsx from 'clsx';
import { SidebarItem } from 'src/constants/sidebarItems';

type SidebarProps = {
  sidebarItems: SidebarItem[];
  initialIndex?: null | number;
  isCollapsed?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Sidebar({
  sidebarItems,
  initialIndex = null,
  isCollapsed = false,
  ...rest
}: SidebarProps) {
  const [selectedIndex, setSeletedIndex] = useState<number | null>(
    initialIndex
  );

  return (
    <aside className='h-lvh w-fit bg-bg' {...rest}>
      <ul className={cn(isCollapsed ? 'w-[90px]' : 'w-[200px]')}>
        {sidebarItems.map(({ iconName, label, url }, index) => (
          <li
            key={index}
            className={cn(
              !isCollapsed && index === selectedIndex && 'bg-primary-main100',
              !isCollapsed && 'hover:bg-primary-main100',
              'font-semibold text-text-sub'
            )}
          >
            <Link
              href={url}
              onClick={() => setSeletedIndex(index)}
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
                    index === selectedIndex
                      ? 'stroke-primary'
                      : 'stroke-text-sub'
                  )}
                />
                {isCollapsed && (
                  <p
                    className={clsx(
                      'text-caption group-hover:text-primary',
                      index === selectedIndex && 'text-primary'
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
                    index === selectedIndex && 'text-primary'
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
