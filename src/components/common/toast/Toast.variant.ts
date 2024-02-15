import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'flex w-full items-center gap-4xs rounded-md bg-gray-1000/90 px-3xs py-[0.875rem] text-sm',
  {
    variants: {
      type: {
        default: 'text-white',
        warning: 'text-warning',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);
