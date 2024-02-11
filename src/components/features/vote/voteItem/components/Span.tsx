import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

type Props = HTMLAttributes<HTMLSpanElement>;

const Span = ({ children, className, ...props }: Props) => {
  return (
    <span className={cn('grow text-gray-700', className)} {...props}>
      {children}
    </span>
  );
};

export default Span;
