import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Spinner } from '@/components/common/spinner';
import { cn } from '@/lib/core';

import { buttonVariants } from './Button.variant';
import { IconProps, LoadingProps } from './types';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  LoadingProps &
  IconProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      width,
      className,
      children,
      Icon,
      iconOnly = false,
      iconSide = 'left',
      isLoading,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        type="button"
        className={cn(buttonVariants({ variant, width, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && <Spinner />}
        {iconOnly ? (
          Icon
        ) : (
          <>
            {Icon && iconSide === 'left' && Icon}
            {children}
            {Icon && iconSide === 'right' && Icon}
          </>
        )}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
