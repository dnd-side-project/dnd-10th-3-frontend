import { motion } from 'framer-motion';
import Image from 'next/image';
import { ComponentProps, createContext, forwardRef, HTMLAttributes, useContext } from 'react';

import { Button } from '@/components/common/button';
import { IconType } from '@/components/common/icon/assets';
import { Radio as RadioButton } from '@/components/common/radio';
import { cn } from '@/lib/core';

import { voteItemVariant } from './VoteItem.variant';

export type VoteItemMode = 'read' | 'select' | 'input' | 'result';
const VoteItemContext = createContext<VoteItemMode>('read');

const VoteItem = ({
  mode,
  children,
  className,
  ...props
}: { mode: VoteItemMode } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <VoteItemContext.Provider value={mode}>
      <div className={cn(voteItemVariant({ mode, className }))} {...props}>
        {children}
      </div>
    </VoteItemContext.Provider>
  );
};

/**
 * @description VoteItem에 사용되는 아이콘 버튼
 */
const IconButton = ({
  icon,
  className,
}: { icon: IconType } & Omit<ComponentProps<typeof Button>, 'icon'>) => {
  return (
    <Button
      variant="empty"
      iconOnly
      icon={icon}
      iconColor="gray-300"
      className={cn('!p-0', className)}
    />
  );
};

/**
 * @description VoteItem에 사용되는 라디오 버튼
 */
const Radio = ({ ...props }: ComponentProps<typeof RadioButton>) => {
  const mode = useContext(VoteItemContext);

  return <RadioButton disabled={mode !== 'select'} {...props} />;
};

/**
 * @description VoteItem에 사용되는 이미지 컨테이너
 */
const Img = ({ src, alt }: ComponentProps<typeof Image>) => {
  return (
    <div className="relative size-md overflow-hidden">
      <Image src={src} alt={alt} className="rounded-sm object-cover" fill />
    </div>
  );
};

/**
 * @description VoteItem에 사용되는 인풋
 */
const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>, ref) => {
    return (
      <input
        type="text"
        className={cn('grow py-3xs focus:outline-none', className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'VoteItemInput';

/**
 * @description VoteItem에서 투표율을 표현하기 위한 컴포넌트
 */
const Progress = ({
  color,
  progress,
}: { color: 'gray' | 'primary'; progress: number } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div
      animate={{ x: `${progress}%` }}
      transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
      className={cn(
        'absolute inset-y-0 -left-full right-full -z-10 -translate-x-full',
        color === 'gray' && 'bg-gray-50',
        color === 'primary' && 'bg-primary-200',
      )}
    />
  );
};

/**
 * @description VoteItem에서 텍스트를 표현하기 위한 컴포넌트
 */
const Text = ({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  const mode = useContext(VoteItemContext);

  return (
    <div
      className={cn('grow text-gray-700', mode === 'result' ? 'py-[6px]' : 'py-3xs', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Object.assign(VoteItem, { Radio, IconButton, Text, Input, Progress, Img });
