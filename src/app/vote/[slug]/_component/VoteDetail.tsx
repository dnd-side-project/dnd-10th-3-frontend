'use client';

import { notFound } from 'next/navigation';

import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { VoteCard } from '@/components/features/vote';
import { Typography } from '@/foundations/typography';
import { useGetVoteById } from '@/hooks/vote/useGetVoteById';

import { VoteExtraDetail } from '.';
import Voting from './Voting';

type Props = {
  voteId: number;
};

const VoteDetail = ({ voteId }: Props) => {
  const { status, data } = useGetVoteById(voteId);

  return (
    <section className="h-fit px-2xs">
      {status === 'pending' ? (
        <Spinner />
      ) : status === 'error' ? (
        notFound()
      ) : (
        <>
          <VoteExtraDetail nickname={data.user.nickname} views={data.views} category="축의금" />

          <Typography type="title2" className="mt-3xs text-gray-1000">
            Q. {data.title}
          </Typography>
          <Typography type="body3" className="mb-3xs mt-4xs text-gray-500">
            {data.content}
          </Typography>

          <VoteCard>
            <VoteCard.Header
              closeDate={data.closeDate}
              voter={data.voters}
              fontColor="text-gray-600"
              fontSize="text-xs"
            />

            <Voting voteId={data.id} selected={data.selected} selections={data.selections} />
          </VoteCard>

          <div className="mb-3xs mt-sm flex justify-between">
            <Button
              icon={status ? 'filledHeart' : 'heart'}
              iconColor="primary-700"
              variant="empty"
              className="gap-6xs !p-0 text-[14px] text-gray-600 "
            >
              {data.likes}
            </Button>
            <Button iconOnly icon="share" variant="empty" className="!p-0" />
          </div>
        </>
      )}
    </section>
  );
};

export default VoteDetail;
