'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

/**
 * HERE: guage 값을 0~100 사이로 제한하고 싶은데, 이러한 경우 어떻게 구현하면 좋을까요?
 *       현업에서 https://stackoverflow.com/a/70307091 링크처럼 커스텀 타입을 구현해서 사용하기도 하나요?
 */
type Props = { gauge: number } & VariantProps<typeof gaugeVariants> &
  HTMLAttributes<HTMLDivElement>;

const gaugeVariants = cva('absolute inset-y-0 -left-full right-full -z-10 -translate-x-full', {
  variants: {
    color: {
      gray: 'bg-gray-100',
      primary: 'bg-primary-200',
    },
  },
});

const Gauge = ({ color, gauge }: Props) => {
  return (
    <motion.div
      animate={{ x: `${gauge}%` }}
      transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
      className={cn(gaugeVariants({ color }))}
    />
  );
};

export default Gauge;
