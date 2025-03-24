import { cn } from './../../lib/utils';
import { HTMLAttributes } from 'react';

const listToolbarSize = {
  lg: 'h-[60px]',
  sm: 'h-[45px]',
};

type ListToolbarSize = keyof typeof listToolbarSize;

type ListToolbarProps = {
  size?: ListToolbarSize;
  hideBorder?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function ListToolbar({
  size = 'lg',
  hideBorder = false,
  children,
  className,
  ...rest
}: ListToolbarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-divider px-[20px]',
        listToolbarSize[size],
        !hideBorder && 'border-b',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
