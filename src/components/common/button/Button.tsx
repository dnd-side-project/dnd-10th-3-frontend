import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Icon } from '@/components/common/icon';
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
      icon,
      iconColor = 'gray-300',
      iconSize = 20,
      iconOnly = false,
      iconSide = 'left',
      isLoading,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        type="button"
        className={cn(
          buttonVariants({ variant, width, className }),
          disabled && 'cursor-not-allowed text-gray-400 bg-[#D7DBE0]',
        )}
        ref={ref}
        {...props}
      >
        {isLoading && <Spinner />}
        {iconOnly ? (
          <Icon icon={icon!} size={iconSize} color={iconColor} />
        ) : (
          <>
            {icon && iconSide === 'left' && <Icon icon={icon} size={iconSize} color={iconColor} />}
            {children}
            {icon && iconSide === 'right' && <Icon icon={icon} size={iconSize} color={iconColor} />}
          </>
        )}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
