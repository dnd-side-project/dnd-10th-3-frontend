import { cva } from 'class-variance-authority';

// TODO: 디자인 시안 적용 필요 (현재는 임시 디자인)
export const buttonVariants = cva(
  'inline-flex select-none items-center justify-center gap-5xs rounded-md px-3xs py-4xs text-base',
  {
    variants: {
      variant: {
        primary: 'bg-gray-600 text-gray-100',
        secondary: 'bg-gray-100 text-gray-600',
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
