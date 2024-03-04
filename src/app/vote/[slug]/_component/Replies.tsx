'use client';

import { useCallback, useRef, useState } from 'react';

import { ControlTab } from '@/components/common/controlTab';
import { Spinner } from '@/components/common/spinner';
import { Reply } from '@/components/features/vote';
import { Notice, ReplyInput } from '@/components/shared';
import { REPLY_SORT_OPTIONS, ReplySortOptions } from '@/constants/options';
import { Typography } from '@/foundations/typography';
import { useGetVoteReplies, useVoteReplyMutation } from '@/hooks/vote';
import { VoteReplyType } from '@/types/vote';

type Props = {
  voteId: number;
};

const Replies = ({ voteId }: Props) => {
  const { status, data: replies } = useGetVoteReplies({ voteId });
  const { mutateAsync: createVoteReplyAsync } = useVoteReplyMutation();

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

      {/* TODO: Suspense or SSR */}
      {status === 'pending' ? (
        <div className="flex items-center justify-center py-lg">
          <Spinner />
        </div>
      ) : status === 'error' ? (
        <div>에러</div>
      ) : sortedReplyData.length > 0 ? (
        <ul className="flex h-full flex-col px-2xs py-3xs">
          {sortedReplyData.map((reply) => (
            <Reply key={reply.commentId} reply={reply} />
          ))}
        </ul>
      ) : (
        <NoReplies />
      )}

      <ReplyInput
        onSubmit={async (content) => {
          await createVoteReplyAsync({ voteId, content });
          scrollToBottom();
        }}
      />
    </section>
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
