import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import Submit from '@/assets/icons/submit.svg'; // NOTE: 임시 아이콘
import { Spinner } from '@/components/common/spinner';
import { cn } from '@/lib/core';

import { IconProps, LoadingProps } from './types';
import { buttonVariants } from './variant';

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
      icon, // TODO: icon 목록(타입) 정해놓기
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
          disabled && 'cursor-not-allowed opacity-30',
        )}
        ref={ref}
        {...props}
      >
        {isLoading && <Spinner />}
        {iconOnly ? (
          <Submit width="32px" height="32px" color="currentColor" /> // FIXME: icon 변경
        ) : (
          <>
            {/* FIXME: icon 변경 */}
            {icon && iconSide === 'left' && (
              <Submit width="32px" height="32px" color="currentColor" />
            )}
            {children}
            {icon && iconSide === 'right' && (
              <Submit width="32px" height="32px" color="currentColor" />
            )}
          </>
        )}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
