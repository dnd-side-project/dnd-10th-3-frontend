import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

import { ProgressBarContainerVariants } from './variant';

type ProgressBarProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof ProgressBarContainerVariants> & {
    currentProgress: number;
  };

//TODO : 색 수정 및 디테일 수정해야합니다.
//TODO : top-0 left-0도 린트 에러가 발생합니다.

export const ProgressBar = ({ currentProgress, width, ...props }: ProgressBarProps) => {
  return (
    <div className={cn(ProgressBarContainerVariants({ width }))} {...props}>
      <div className="relative h-[6px] w-[100%] rounded-lg bg-gray-100">
        <div
          className="absolute left-0 top-0 z-[1] h-[6px] rounded-lg bg-primary-600"
          style={{ width: `${currentProgress}%` }}
        />
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
