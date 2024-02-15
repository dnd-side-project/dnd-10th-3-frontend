'use client';

import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { Icon } from '@/components/common/icon';
import { cn } from '@/lib/core';

import { toastVariants } from './Toast.variant';

type Props = { message: string } & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof toastVariants>;

const Toast = ({ type, message, className, ...props }: Props) => {
  return (
    <div className={cn(toastVariants({ type }), className)} {...props}>
      <Icon
        icon={type === 'warning' ? 'warning' : 'confirm'}
        color={type === 'warning' ? 'warning' : 'white'}
        size={20}
      />
      <span className="w-full">{message}</span>
    </div>
  );
};

export default Toast;
