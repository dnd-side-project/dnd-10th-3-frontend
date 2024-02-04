'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, useCallback, useState } from 'react';

import { colors } from '@/../styles/theme';
import { cn } from '@/lib/core';

import { Icon } from '../icon';

//TODO : bg-white 대체 하기, 원래 flex h-[56px] 좌측에 있었습니다.
//TODO : 디자인 나오면 본격적으로 입히기

const inputContainerVariants = cva(
  'flex h-[56px] w-full items-center gap-6xs rounded-md border bg-white p-3xs shadow-thumb',
  {
    variants: {
      isFocused: {
        true: 'border-primary-200',
        false: 'border-gray-100',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
  },
);

//TODO : bg-white 대체 하기, 원래 flex h-[56px] 좌측에 있었습니다.
const inputVariants = cva(
  ' w-full bg-white placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ',
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  includeSubmitButton?: boolean;
  onSubmit?: VoidFunction;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, includeSubmitButton = false, onSubmit = () => {}, ...props }: InputProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);

    return (
      <div className={inputContainerVariants({ isFocused })}>
        <input
          className={cn(inputVariants(), className)}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {includeSubmitButton && (
          <div className="size-[32px]">
            <Icon
              icon="submit"
              size={32}
              className="cursor-pointer transition-colors duration-300"
              fill={props.disabled || !props.value ? colors.gray[200] : colors.gray[400]}
              onClick={onSubmit}
            />
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
