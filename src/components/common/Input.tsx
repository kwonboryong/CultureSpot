import * as React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, ...props }, ref) => {
    return (
      <div className='relative w-full rounded-lg focus-within:ring-1 focus-within:ring-offset-primary-hover'>
        <input
          type={type}
          className={cn(
            'focus-visible:ring-ring flex h-10 w-full bg-bg-light px-4 py-1 text-sm transition-colors placeholder:text-text-disabled focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            'pr-10',
            'rounded-lg'
          )}
          ref={ref}
          {...props}
        />

        {icon && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-xs'>
            {icon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
