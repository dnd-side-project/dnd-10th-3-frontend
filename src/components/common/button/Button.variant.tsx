import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex select-none items-center justify-center gap-5xs rounded-lg px-3xs py-4xs text-base font-medium disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-gray-1000 text-white disabled:bg-[#D7DBE0] disabled:text-gray-400',
        secondary: 'bg-gray-100 text-gray-1000 disabled:bg-[#D7DBE0] disabled:text-gray-400',
        empty: 'bg-transparent disabled:text-gray-50',
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
