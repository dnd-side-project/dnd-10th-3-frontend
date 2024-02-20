import { cva } from 'class-variance-authority';

export const inputContainerVariants = cva('flex w-full items-center gap-5xs border p-3xs', {
  variants: {
    variant: {
      empty: 'border-none bg-inherit shadow-none',
    },
    bgcolor: {
      white: 'bg-white',
      lightGray: 'bg-gray-50',
      gray: 'bg-gray-100',
    },
    borderRadius: {
      basic: 'rounded-md',
      large: 'rounded-lg',
    },
    height: {
      basic: 'h-[36px]',
      large: 'h-md',
    },
    isFocused: {
      true: 'border-primary-700 bg-white',
      false: 'border-gray-100',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    borderRadius: 'basic',
    height: 'basic',
    bgcolor: 'gray',
  },
});

export const inputVariants = cva(
  ' w-full bg-transparent placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ',
);
