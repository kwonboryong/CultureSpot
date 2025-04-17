import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const buttonVariants = cva(
  'h-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-10 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-black text-white shadow hover:bg-text-sub',
        primary: 'bg-primary hover:bg-primary-hover text-white shadow',
        secondary: 'bg-white border border-default hover:bg-bg-light',
        google:
          'relative flex items-center justify-center overflow-hidden rounded  border border-divider bg-white px-3 text-sm transition duration-200 hover:shadow-md',
        kakao: 'bg-[#FEE500] rounded hover:shadow-md',
        negative: 'bg-red-600 hover:bg-red-700 text-white shadow',
        none: 'text-text-sub',
      },
      size: {
        default: 'px-4 py-2 w-32',
        sm: 'px-3 w-24',
        lg: 'px-5 w-72',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
