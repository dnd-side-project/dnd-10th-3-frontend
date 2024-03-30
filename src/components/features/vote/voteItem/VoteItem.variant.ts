import { cva } from 'class-variance-authority';

export const voteItemVariant = cva(
  `relative z-0 flex w-full select-none items-center gap-5xs overflow-hidden rounded-lg border px-3xs text-sm text-gray-700
  has-[:checked]:border-primary-700 has-[input[type=text]:focus]:border-gray-700`,
  {
    variants: {
      mode: {
        read: 'cursor-default !border-gray-50 bg-gray-50',
        select: 'cursor-pointer',
        input: '',
        result: 'cursor-default',
      },
    },
  },
);
