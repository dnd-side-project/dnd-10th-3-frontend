import { cva } from 'class-variance-authority';

// TODO: 디자인 시안 적용 필요 (현재는 임시 디자인)
export const hrVariants = cva('mx-auto', {
  variants: {
    margin: {
      xs: 'my-none',
      sm: 'my-xs',
      md: 'my-md',
      lg: 'my-lg',
      xl: 'my-xl',
    },
    width: {
      '25%': 'w-1/4',
      '50%': 'w-1/2',
      '100%': 'w-full',
    },
    color: {
      primary: 'text-blue-60',
      dimmed: 'text-gray-30',
    },
    height: {
      sm: '',
      md: 'border-2',
      lg: 'border-4',
    },
  },
  defaultVariants: {
    margin: 'md',
    width: '100%',
    color: 'dimmed',
    height: 'sm',
  },
});
