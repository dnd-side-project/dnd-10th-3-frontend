import { VariantProps, cva } from 'class-variance-authority';
import dayjs from 'dayjs';
import { HTMLAttributes } from 'react';

import { Icon } from '@/components/common/icon';
import { Tag } from '@/components/common/tag';
import { Typography } from '@/components/common/typography';
import { CATEGORIES } from '@/constants/category';
import { cn } from '@/lib/core';
import { fromNowOf } from '@/utils/dates';
import { isPast } from '@/utils/dates/isPast';

type Props = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headerVariants> & {
    closeDate?: string;
    voter?: number;
    categories?: (typeof CATEGORIES)[number];
    fontColor?: 'text-gray-600';
    fontSize?: 'text-xs';
  };

const headerVariants = cva(`flex items-center justify-between pb-3xs`);

const Header = ({ closeDate, voter, categories, className, fontColor, fontSize }: Props) => {
  return (
    <div className={cn(headerVariants({ className }))}>
      {categories ? (
        <Tag>{categories}</Tag>
      ) : (
        <div className="flex items-center justify-center gap-1">
          <Icon icon="votebox" color="gray-300" size={18} />
          <Typography type="title4" className="text-gray-600">
            투표
          </Typography>
        </div>
      )}

      <div className="flex items-center gap-5xs">
        {closeDate &&
          (isPast(dayjs(closeDate).endOf('day')) ? (
            <Typography type="body3" className={cn('text-gray-600', fontSize)}>
              투표기간 종료
            </Typography>
          ) : (
            <Typography type="body3" className={cn('text-primary-700', fontColor, fontSize)}>
              {fromNowOf(dayjs(closeDate).endOf('day'))}
            </Typography>
          ))}

        {voter !== undefined ? (
          <>
            <Icon icon="divider" color="gray-300" width={8} height={10} />
            <Typography type="caption1" className="font-normal text-gray-600">
              {voter}명 참여
            </Typography>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
