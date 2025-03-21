import { cn } from './../../lib/utils';
import { HTMLAttributes } from 'react';
import { Button, ButtonProps } from './Button';

type ActionBarProps = {
  leftContent?: React.ReactNode;
  buttons: ButtonProps[];
} & HTMLAttributes<HTMLDivElement>;

export default function ActionBar({
  leftContent,
  buttons,
  className,
  ...rest
}: ActionBarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-t border-border px-[20px] px-[40px] py-[10px]',
        className
      )}
      {...rest}
    >
      <div>{leftContent}</div>
      <div className='flex items-center gap-x-[10px]'>
        {buttons.map((button) => (
          <Button {...button} />
        ))}
      </div>
    </div>
  );
}
