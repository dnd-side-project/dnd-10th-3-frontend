import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

//TODO : text-white 에러
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-[6px] font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-30',
  {
    variants: {
      variant: {
        primary: 'text-white',
        heavy: 'text-white',
        green: 'hover:text-white',
        tertiary: '',
        issue: '',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
      },
      width: {
        full: 'w-full',
      },
      height: {
        h60: 'h-[60px]',
        h44: 'h-[44px]',
        h12: 'h-[12px]',
      },
    },
    defaultVariants: {
      variant: 'heavy',
      rounded: 'lg',
      width: 'full',
      height: 'h60',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, width, height, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, rounded, width, height, className })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
