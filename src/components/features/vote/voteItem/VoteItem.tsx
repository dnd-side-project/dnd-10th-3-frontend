'use client';
/**
 * HERE: VoteItem이 클라이언트 컴포넌트에서 사용될 예정이라 use client 키워드를 붙여두었습니다.
 *       아직 감이 덜 잡혀서 그러는데, 재사용성이 많은 컴포넌트를 작성할 때 어떤 기준을 가지고 use client를 붙여야 할까요?
 */

import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { Radio } from '@/components/common/radio'; // HERE: Radio는 common으로부터 import
import { cn } from '@/lib/core';

import { Gauge, IconButton, Image, Input, Span } from './components'; // HERE: 현재 위치의 components로부터 import
import { voteItemVariant } from './VoteItem.variant';

type Props = HTMLAttributes<HTMLDivElement> & VariantProps<typeof voteItemVariant>;

const VoteItem = ({ readOnly, children, className, ...props }: Props) => {
  return (
    <div className={cn(voteItemVariant({ readOnly, className }))} {...props}>
      {children}
    </div>
  );
};

export default Object.assign(VoteItem, { Radio, IconButton, Span, Input, Gauge, Image });

/**
 * HERE: Radio의 경우 다른 컴포넌트(IconButton, Span 등)와 다르게 common에서 import하여 Object.assign을 통해 VoteItem에 묶어주고 있는데요.
 *       어떤 건 common에서 가져오고 어떤건 현 위치의 components 폴더에서 가져와서 일관성이 없다고 생각이 듭니다.
 *       Radio의 경우 한 번 더 래핑하거나 css를 추가할 필요가 없어서 이렇게 작성했는데,
 *       이렇게 사용해도 괜찮은지, 코드가 더러워보이지 않는지, 더 좋은 방법이 있는지 궁금합니다.
 *
 *       참고로, common은 프로젝트 전반에 사용되는 공통 컴포넌트 폴더이고 ./components는 VoteItem에서만 사용되는 컴포넌트 폴더입니다.
 */
