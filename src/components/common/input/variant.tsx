import { cva } from 'class-variance-authority';

export const inputContainerVariants = cva(
  'flex w-full items-center gap-5xs border p-3xs shadow-thumb',
  {
    variants: {
      variant: {
        empty: 'border-none shadow-none',
      },
      bgcolor: {
        white: 'bg-white',
        gray: 'bg-gray-100',
      },
      borderRadius: {
        basic: 'rounded-md',
        large: 'rounded-lg',
        larger: 'rounded-3xl',
      },
      height: {
        basic: 'h-md',
        large: 'h-[52px]',
        larger: 'h-xl',
      },
      isFocused: {
        true: 'border-primary-700',
        false: 'border-gray-100',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
    defaultVariants: {
      borderRadius: 'basic',
      height: 'basic',
      bgcolor: 'white',
    },
  },
);

export const inputVariants = cva(
  ' w-full bg-transparent placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ',
);
