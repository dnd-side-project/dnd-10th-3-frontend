'use client';

import { VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

import { ProgressBarContainerVariants } from './variant';

type ProgressBarProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof ProgressBarContainerVariants> & {
    progress: number;
    progressRate?: number;
  };

export const ProgressBar = ({
  progress,
  progressRate,
  width,
  className,
  ...props
}: ProgressBarProps) => {
  return (
    <div className={cn(ProgressBarContainerVariants({ width }))} {...props}>
      <div className={cn('relative h-[6px] overflow-hidden rounded-lg bg-gray-100', className)}>
        <motion.div
          className="absolute inset-y-0 -left-full right-full -translate-x-full rounded-lg bg-primary-700"
          animate={{ x: `${progress}%` }}
          initial={{ x: progressRate ? `${progress - progressRate}%` : 0 }}
          transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
