'use client';

import { Suspense, useCallback, useRef, useState } from 'react';

import { ControlTab } from '@/components/common/controlTab';
import { Spinner } from '@/components/common/spinner';
import { Typography } from '@/components/common/typography';
import { Reply } from '@/components/features/vote';
import { Notice, ReplyInput } from '@/components/shared';
import { REPLY_SORT_OPTIONS, ReplySortOptions } from '@/constants/options';
import { useGetUser } from '@/hooks/auth';
import {
  useCreateVoteReplyMutation,
  useDeleteVoteReplyMutation,
  useGetVoteReplies,
  useLikeVoteReplyMutation,
} from '@/hooks/vote';
import { VoteReplyType } from '@/types/vote';

type Props = {
  voteId: number;
};

const Replies = ({ voteId }: Props) => {
  const { data: user } = useGetUser();
  const { data: replies } = useGetVoteReplies({ voteId });
  const { mutateAsync: createVoteReplyAsync } = useCreateVoteReplyMutation();
  const { mutate: deleteVoteReply } = useDeleteVoteReplyMutation();
  const { mutate: toggleLikeVoteReply } = useLikeVoteReplyMutation();

  const [sortOption, setSortOption] = useState<ReplySortOptions>('등록순');

  const scrollContainerRef = useRef<HTMLElement | null>(null);

  const totalReplyCount = replies ? replies.length : 0;
  const sortedReplyData = replies ? sortReply(replies, sortOption) : [];

  const scrollToBottom = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, []);

  return (
    <section className="flex grow flex-col" ref={scrollContainerRef}>
      <div className="flex items-center justify-between px-2xs py-3xs">
        <Typography type="title4">댓글 {totalReplyCount}</Typography>

        <ControlTab
          controlTabItems={REPLY_SORT_OPTIONS}
          selectedTab={sortOption}
          setSelectedTab={setSortOption}
        />
      </div>

      <Notice text="댓글을 사용할 때는 타인을 존중해야합니다." />

      <Suspense fallback={<ReplyFallback />}>
        {sortedReplyData.length > 0 ? (
          <ul className="flex h-full flex-col px-2xs py-3xs">
            {sortedReplyData.map((reply) => (
              <Reply
                key={reply.commentId}
                reply={reply}
                onLikeToggle={() =>
                  toggleLikeVoteReply({ voteId: reply.voteId, commentId: reply.commentId })
                }
                onDelete={() =>
                  deleteVoteReply({
                    commentId: reply.commentId,
                    voteId: reply.voteId,
                  })
                }
                isWrittenByCurrentUser={reply.userId === user?.userId}
              />
            ))}
          </ul>
        ) : (
          <NoReplies />
        )}
      </Suspense>

      <ReplyInput
        onSubmit={async (content) => {
          await createVoteReplyAsync({ voteId, content });
          scrollToBottom();
        }}
      />
    </section>
  );
};

const ReplyFallback = () => {
  return (
    <div className="flex h-full items-center justify-center py-lg">
      <Spinner />
    </div>
  );
};

const NoReplies = () => {
  return (
    <div className="flex h-full items-center justify-center py-lg">
      <Typography
        type="body3"
        className="text-center text-gray-500"
      >{`아직 댓글이 없어요.\n가장 먼저 댓글을 남겨 보세요.`}</Typography>
    </div>
  );
};

const sortReply = (data: VoteReplyType[], sortOption: ReplySortOptions = '등록순') => {
  if (sortOption === '공감순') {
    return data.sort((a, b) => (a.likes <= b.likes ? 1 : -1));
  }
  if (sortOption === '등록순') {
    return data.sort((a, b) => (+a.createdAt <= +b.createdAt ? -1 : 1));
  }
  return data;
};

export default Replies;
