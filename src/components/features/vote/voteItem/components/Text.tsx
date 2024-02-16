import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

type Props = {
  doubleLine?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

const Text = ({ doubleLine, children, className, ...props }: Props) => {
  return (
    <div
      className={cn('grow text-gray-700', doubleLine ? 'py-[6px]' : 'py-3xs', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Text;
