import { cva } from 'class-variance-authority';

// TODO: 디자인 시안 적용 필요 (현재는 임시 디자인)
export const ProgressBarContainerVariants = cva(' z-0 select-none', {
  variants: {
    width: {
      '25%': 'w-1/4',
      '50%': 'w-1/2',
      '100%': 'w-full',
    },
  },
  defaultVariants: {
    width: '100%',
  },
});
