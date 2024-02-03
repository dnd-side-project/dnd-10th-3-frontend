import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'flex w-fit cursor-pointer items-center justify-center rounded-xl px-3xs py-6xs',
  {
    variants: {
      variant: {
        primary: 'bg-primary-200 text-primary-700',
        secondary: 'bg-gray-100 text-gray-300',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
