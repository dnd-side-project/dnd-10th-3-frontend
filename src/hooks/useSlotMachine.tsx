'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/core';

type Props = {
  textList: string[] | readonly string[];
  duration: number;
};

type VariantProps = {
  y: number;
  opacity: number;
  filter?: string;
};

/**
 *
 * @param textList: 랜덤으로 골라질 값들의 배열을 넣습니다.
 * @param duration: 룰렛이 얼마나 오래 돌아갈지 결정합니다.
 * @returns SlotMachine: 랜덤으로 돌아가는 문자만 들어가있는 컴포넌트.
 * @returns randomStart: 랜덤으로 돌아가는걸 시작하는 함수
 * @returns text: 랜덤으로 선택된 문자.
 */

export const useSlotMachine = ({ textList, duration }: Props) => {
  const count = Math.floor(Math.random() * textList.length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textArr = Array(duration).fill(textList).flat();

  const lastIndex = textArr.length - 1;

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prev) => {
          return prev < lastIndex ? prev + 1 : prev;
        });
      },
      getDuration(10, currentIndex),
    );

    return () => clearInterval(interval);
  }, [currentIndex, lastIndex, count]);

  const variants: Variants = {
    initial: { y: '-15%', opacity: 0 },
    animate: ({ isLast }) => {
      const props: VariantProps = { y: 0, opacity: 1 };
      if (!isLast) props['filter'] = 'blur(1.2px)';
      return props;
    },
  };

  function getDuration(base: number, index: number) {
    return base * (index + 1) * 0.5;
  }

  return {
    SlotMachine: ({ className }: { className?: string }) => (
      <div className="flex justify-center">
        <AnimatePresence mode="sync">
          {textArr.map((text, i) => {
            const isLast = i === lastIndex;

            return (
              i === currentIndex && (
                <motion.div
                  className={cn('overflow-hidden', className)}
                  key={text}
                  custom={{ isLast }}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: getDuration(isLast ? 0.1 : 0.01, i),
                    ease: isLast ? 'easeOut' : 'linear',
                  }}
                >
                  {text}
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>
    ),
    text: textArr[currentIndex],
  };
};
