import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/core';

type Props = InputHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className, ...props }: Props, ref) => {
  return (
    <textarea
      className={cn('resize-none text-gray-1000 focus:outline-none', className)}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export default Textarea;
