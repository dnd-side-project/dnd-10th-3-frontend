import { VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

import { PROGRESSRATE } from '@/constants/test/progress';
import { cn } from '@/lib/core';

import { ProgressBarContainerVariants } from './variant';

type ProgressBarProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof ProgressBarContainerVariants> & {
    progress: number;
  };

export const ProgressBar = ({ progress, width, ...props }: ProgressBarProps) => {
  return (
    <div className={cn(ProgressBarContainerVariants({ width }))} {...props}>
      <div className="relative h-[6px] overflow-hidden rounded-lg bg-gray-100">
        <motion.div
          className="absolute inset-y-0 -left-full right-full -translate-x-full rounded-lg bg-primary-700"
          animate={{ x: `${progress}%` }}
          // TODO : 현재 뒤로가기시 애니메이션이 어색하여 리팩토링 예정 기존 0에서 시작하는 에러는 해결
          initial={{ x: `${progress - PROGRESSRATE}%` }}
          transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
