'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';

type Props = { progress: number } & VariantProps<typeof progressVariants> &
  HTMLAttributes<HTMLDivElement>;

const progressVariants = cva('absolute inset-y-0 -left-full right-full -z-10 -translate-x-full', {
  variants: {
    color: {
      gray: 'bg-gray-50',
      primary: 'bg-primary-200',
    },
  },
});

const Progress = ({ color, progress }: Props) => {
  return (
    <motion.div
      animate={{ x: `${progress}%` }}
      transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
      className={cn(progressVariants({ color }))}
    />
  );
};

export default Progress;
