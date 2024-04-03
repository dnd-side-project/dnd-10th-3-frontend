'use client';

import { Suspense } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Spinner } from '@/components/common/spinner';
import { Typography } from '@/components/common/typography';
import { VoteCard } from '@/components/features/vote';
import { LikeButton } from '@/components/shared';
import { useGetVoteById, useLikeVoteMutation } from '@/hooks/vote';

import { VoteExtraDetail, Voting } from '.';

type Props = {
  voteId: number;
};

const VoteDetail = ({ voteId }: Props) => {
  const { data } = useGetVoteById(voteId);
  const { mutate: toggleLike } = useLikeVoteMutation();

  return (
    <section className="h-fit px-2xs">
      <Suspense fallback={<VoteDetailFallback />}>
        <VoteExtraDetail
          voteId={data.id}
          author={data.user}
          views={data.views}
          category={data.category}
        />

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
          <LikeButton
            isLiked={data.isLiked}
            likeCount={data.likes}
            onClick={() => toggleLike({ voteId })}
          />
          <Button
            iconOnly
            Icon={<Icon icon="share" color="gray-300" />}
            variant="empty"
            className="!p-0"
          />
        </div>
      </Suspense>
    </section>
  );
};

const VoteDetailFallback = () => {
  return (
    <div className="flex min-h-[480px] items-center justify-center">
      <Spinner />
    </div>
  );
};

export default VoteDetail;
