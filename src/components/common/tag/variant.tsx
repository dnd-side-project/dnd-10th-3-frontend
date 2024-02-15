import { cva } from 'class-variance-authority';

export const tagVariants = cva('flex w-fit select-none items-center justify-center rounded-xl', {
  variants: {
    variant: {
      primary: 'text-secondary-deep',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
