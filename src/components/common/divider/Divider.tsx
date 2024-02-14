import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

import { dividerVariants } from './Divider.variant';

export type Props = HTMLAttributes<HTMLHRElement> & VariantProps<typeof dividerVariants>;

const Divider = ({ className, width, height, color, ...props }: Props) => {
  return <hr className={cn(dividerVariants({ width, height, color, className }))} {...props} />;
};

Divider.displayName = 'Divider';

export default Divider;
