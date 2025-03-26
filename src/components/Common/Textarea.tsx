import { cn } from '@/lib/utils';
import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = (
  { className, ...props }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>
) => {
  return (
    <textarea
      ref={ref}
      className={cn('rounded-5 border', className)}
      {...props}
    />
  );
};

export default React.forwardRef(Textarea);
