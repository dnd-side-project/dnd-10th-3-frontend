import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { Radio } from '@/components/common/radio';
import { cn } from '@/lib/core';

import { IconButton, Img, Input, Progress, Text } from './components';
import { voteItemVariant } from './VoteItem.variant';

type Props = HTMLAttributes<HTMLDivElement> & VariantProps<typeof voteItemVariant>;

const VoteItem = ({ readOnly, children, className, ...props }: Props) => {
  return (
    <div className={cn(voteItemVariant({ readOnly, className }))} {...props}>
      {children}
    </div>
  );
};

export default Object.assign(VoteItem, { Radio, IconButton, Text, Input, Progress, Img });
