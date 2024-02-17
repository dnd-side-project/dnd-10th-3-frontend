import { forwardRef } from 'react';

import { cn } from '@/lib/core';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }: Props, ref) => {
  return (
    <input
      type="text"
      className={cn('w-full text-sm focus:outline-none', className)}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'VoteItemInput';

export default Input;
