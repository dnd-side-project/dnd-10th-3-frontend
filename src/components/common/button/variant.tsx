import { cva } from 'class-variance-authority';

// TODO: 디자인 시안 적용 필요 (현재는 임시 디자인)
export const buttonVariants = cva(
  'inline-flex select-none items-center justify-center gap-5xs rounded-md px-3xs py-4xs text-base',
  {
    variants: {
      variant: {
        primary: 'bg-gray-60 text-gray-10',
        secondary: 'bg-gray-40 text-gray-60',
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
