'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/core';
import { Range } from '@/types/util';

type Props = { gauge: Range<0, 101> } & VariantProps<typeof gaugeVariants> &
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
