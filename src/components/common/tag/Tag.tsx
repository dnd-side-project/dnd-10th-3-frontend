import { VariantProps } from 'class-variance-authority';
import type { HTMLProps, PropsWithChildren } from 'react';

import { Typography } from '@/foundations/typography';
import { cn } from '@/lib/core';

import { tagVariants } from './variant';

export type TagProps = HTMLProps<HTMLLabelElement> & VariantProps<typeof tagVariants>;

export const Tag = ({ variant, children, ...props }: PropsWithChildren<TagProps>) => {
  return (
    <label className={cn(tagVariants({ variant }))} {...props}>
      <Typography type="heading3">{children}</Typography>
    </label>
  );
};
