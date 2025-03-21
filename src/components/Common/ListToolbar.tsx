import { cn } from './../../lib/utils';
import { HTMLAttributes } from 'react';

const listToolbarSize = {
  lg: 'h-[60px]',
  sm: 'h-[45px]',
};

type ListToolbarSize = keyof typeof listToolbarSize;

type ListToolbarProps = {
  size?: ListToolbarSize;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function ListToolbar({
  size = 'lg',
  leftContent,
  rightContent,
  className,
  ...rest
}: ListToolbarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-b border-border px-[20px]',
        listToolbarSize[size],
        className
      )}
      {...rest}
    >
      {leftContent}
      {rightContent}
    </div>
  );
}
