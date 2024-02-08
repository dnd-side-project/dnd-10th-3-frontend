'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef, useCallback, useState } from 'react';

import { Icon } from '@/components/common/icon';
import { cn } from '@/lib/core';

import { InputIconProps } from './types';

const inputContainerVariants = cva(
  'flex h-[56px] w-full items-center gap-5xs rounded-md border bg-white p-3xs shadow-thumb',
  {
    variants: {
      isFocused: {
        true: 'border-primary-700',
        false: 'border-gray-100',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
  },
);

const inputVariants = cva(
  ' w-full bg-white placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ',
);

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> &
  InputIconProps & {
    onSubmit?: VoidFunction;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      icon,
      iconColor = 'gray',
      iconSide = 'left',
      onSubmit = () => {},
      ...props
    }: InputProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);

    return (
      <div className={inputContainerVariants({ isFocused })}>
        {icon && iconSide === 'left' && <Icon icon={icon} size={20} color={iconColor} />}
        <input
          className={cn(inputVariants(), className)}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {icon && iconSide === 'right' && (
          <Icon
            icon={icon}
            size={32}
            className="cursor-pointer transition-colors duration-300"
            color={iconColor}
            onClick={onSubmit}
          />
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
