'use client';

import { notFound } from 'next/navigation';

import { Button } from '@/components/common/button';
import { Spinner } from '@/components/common/spinner';
import { VoteCard } from '@/components/features/vote';
import { LikeButton } from '@/components/shared';
import { Typography } from '@/foundations/typography';
import { useGetVoteById, useLikeVoteMutation } from '@/hooks/vote';

import { VoteExtraDetail, Voting } from '.';

type Props = {
  voteId: number;
};

const VoteDetail = ({ voteId }: Props) => {
  const { status, data } = useGetVoteById(voteId);
  const { mutate: toggleLike } = useLikeVoteMutation();

  return (
    <section className="h-fit px-2xs">
      {status === 'pending' ? (
        <div className="flex min-h-[480px] items-center justify-center">
          <Spinner />
        </div>
      ) : status === 'error' ? (
        notFound()
      ) : (
        <>
          <VoteExtraDetail
            nickname={data.user.nickname}
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
            <Button iconOnly icon="share" variant="empty" className="!p-0" />
          </div>
        </>
      )}
    </section>
  );
};

export default VoteDetail;
