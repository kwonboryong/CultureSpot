import * as React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, ...props }, ref) => {
    return (
      <div className='relative w-full rounded-lg focus-within:ring-1 focus-within:ring-offset-primary-hover'>
        <input
          type={type}
          className={cn(
            'focus-visible:ring-ring flex h-9 w-full rounded-lg bg-bg-light px-4 py-1 pr-16 text-sm transition-colors placeholder:text-text-disabled focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
          )}
          ref={ref}
          {...props}
        />

        {icon && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-xs font-semibold text-primary underline hover:text-primary-hover'>
            {icon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
