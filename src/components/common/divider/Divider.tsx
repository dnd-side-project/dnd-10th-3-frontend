import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

import { hrVariants } from './variant';

export type Props = HTMLAttributes<HTMLHRElement> & VariantProps<typeof hrVariants>;

const Divider = ({ className, width, height, margin, color, ...props }: Props) => {
  return <hr className={cn(hrVariants({ width, height, margin, color, className }))} {...props} />;
};

Divider.displayName = 'Divider';

export default Divider;
