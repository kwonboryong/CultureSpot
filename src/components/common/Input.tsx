import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  onIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type = 'text', onIconClick, ...props }, ref) => {
    const { onClick, ...inputProps } = props;

    return (
      <div className='relative w-full rounded-lg focus-within:ring-1 focus-within:ring-offset-primary-hover'>
        <input
          type={type}
          className={cn(
            'focus-visible:ring-ring flex h-10 w-full rounded-lg bg-bg-light px-4 py-1 pr-16 text-sm transition-colors placeholder:text-text-disabled focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          ref={ref}
          {...inputProps}
        />

        {icon && (
          <button
            type='button'
            onClick={(e) => onIconClick?.(e)}
            className='absolute text-xs font-semibold underline transform -translate-y-1/2 cursor-pointer right-3 top-1/2 text-primary hover:text-primary-hover'
          >
            {icon}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
