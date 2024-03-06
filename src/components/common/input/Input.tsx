'use client';

import { type VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef, useCallback, useState } from 'react';

import { Icon } from '@/components/common/icon';
import { cn } from '@/lib/core';

import { InputIconProps } from './types';
import { inputContainerVariants, inputVariants } from './variant';

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> &
  VariantProps<typeof inputContainerVariants> &
  InputIconProps & {
    onSubmit?: VoidFunction;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      borderRadius,
      className,
      bgcolor,
      icon,
      iconColor = 'gray-400',
      iconSide = 'left',
      onSubmit = () => {},
      height,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);
    return (
      <div
        className={inputContainerVariants({
          isFocused,
          borderRadius,
          bgcolor,
          variant,
          height,
        })}
      >
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
