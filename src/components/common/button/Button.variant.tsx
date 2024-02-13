import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex select-none items-center justify-center gap-5xs rounded-lg px-3xs py-4xs text-base font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-gray-1000 text-white',
        secondary: 'bg-gray-100 text-gray-1000',
        empty: 'bg-transparent',
      },
      width: {
        fit: 'w-fit min-w-fit',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      width: 'fit',
    },
  },
);
