import { cva } from 'class-variance-authority';

export const dividerVariants = cva('mx-auto my-none border-0', {
  variants: {
    width: {
      '25%': 'w-1/4',
      '50%': 'w-1/2',
      '100%': 'w-full',
    },
    color: {
      'gray-50': 'bg-gray-50',
      'gray-100': 'bg-gray-100',
      'gray-600': 'bg-gray-600',
    },
    height: {
      1: 'h-[1px]',
      2: 'h-[2px]',
      8: 'h-[8px]',
    },
  },
  defaultVariants: {
    width: '100%',
    color: 'gray-50',
    height: 1,
  },
});
