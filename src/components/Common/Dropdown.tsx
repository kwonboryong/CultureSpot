'use client';

import { useState, useRef, useEffect, HTMLAttributes } from 'react';
import Icon from '../Icons/Icon';
import { cn } from 'src/lib/utils';

const dropdownButtonWidths = {
  default: 'w-32',
  sm: 'w-24',
  lg: 'w-48',
  fit: 'w-fit',
} as const;

const dropdownButtonHeights = {
  default: 'h-[42px]',
  sm: 'h-[34px]',
  fit: 'h-fit',
} as const;

const dropdownMenuWidths = {
  default: 'w-32',
  sm: 'w-24',
  lg: 'w-48',
  fit: 'w-fit',
} as const;

const dropdownMenuHeights = {
  default: 'h-[42px]',
  sm: 'h-[34px]',
  lg: 'h-[46px]',
  fit: 'h-fit',
} as const;

const dropdownFontSizes = {
  default: 'text-body1',
  sm: 'text-body2',
};

type DropdownButtonWidths = keyof typeof dropdownButtonWidths;
type DropdownButtonHeights = keyof typeof dropdownButtonHeights;
type DropdownMenuWidths = keyof typeof dropdownMenuWidths;
type DropdownMenuHeights = keyof typeof dropdownMenuHeights;
type DropdownFontSizes = keyof typeof dropdownFontSizes;

type DropdownType = 'select' | 'link';
type MenuAlign = 'left' | 'right';
type MenuItem = {
  label: React.ReactNode;
  onClick: () => void;
};

type DropdownProps = {
  type: DropdownType;
  buttonText?: string;
  menuItems: MenuItem[];
  fontSize?: DropdownFontSizes;
  buttonWidth?: DropdownButtonWidths;
  buttonHeight?: DropdownButtonHeights;
  menuWidth?: DropdownMenuWidths;
  menuHeight?: DropdownMenuHeights;
  menuAlign?: MenuAlign;
  hideButtonBorder?: boolean;
  hideIcon?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Dropdown({
  type,
  buttonText,
  menuItems,
  fontSize = 'default',
  buttonWidth = 'default',
  buttonHeight = 'default',
  menuWidth = 'default',
  menuHeight = 'default',
  menuAlign = 'right',
  hideButtonBorder = false,
  hideIcon = false,
  ...rest
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(menuItems[0].label);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={cn(
        'relative inline-block text-left text-text-sub',
        dropdownFontSizes[fontSize]
      )}
      ref={menuRef}
      {...rest}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'flex items-center justify-between rounded-10 bg-white px-2 py-1 hover:bg-gray-50',
          !hideButtonBorder && 'border',
          dropdownButtonWidths[buttonWidth],
          dropdownButtonHeights[buttonHeight]
        )}
      >
        <div>
          {type === 'select'
            ? (isSelected === menuItems[0].label && buttonText) || isSelected
            : buttonText}
        </div>
        {!hideIcon && (
          <div className='pl-2'>
            <Icon
              name='ARROW_DOWN'
              size={14}
              className={cn(isOpen && 'rotate-180', 'duration-100')}
            />
          </div>
        )}
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute z-10 mt-3 rounded-10 border bg-white shadow-lg',
            menuAlign === 'right' ? 'right-0' : 'left-0',
            dropdownMenuWidths[menuWidth]
          )}
        >
          <ul className={cn('py-1')}>
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  if (type === 'select') {
                    setIsSelected(item.label);
                  }
                  setIsOpen(false);
                  item.onClick();
                }}
                className={cn(
                  'flex cursor-pointer items-center justify-start bg-bg px-2 font-semibold text-text-sub hover:brightness-[0.98]',
                  dropdownMenuHeights[menuHeight],
                  type === 'select' &&
                    isSelected === item.label &&
                    'bg-primary-main100 text-primary'
                )}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
