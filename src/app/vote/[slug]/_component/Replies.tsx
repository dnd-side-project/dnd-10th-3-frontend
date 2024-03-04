'use client';

import { useState } from 'react';

import { ControlTab } from '@/components/common/controlTab';
import { Spinner } from '@/components/common/spinner';
import { Reply } from '@/components/features/vote';
import { EndObserverList, Notice, ReplyInput } from '@/components/shared';
import { REPLY_SORT_OPTIONS, ReplySortOptions } from '@/constants/options';
import { Typography } from '@/foundations/typography';
import { useGetVoteReplies } from '@/hooks/vote';
import { VoteReplyType } from '@/types/vote';

type Props = {
  voteId: number;
};

const Replies = ({ voteId }: Props) => {
  const { status, data: replyPages, fetchNextPage, hasNextPage } = useGetVoteReplies({ voteId });

  const [sortOption, setSortOption] = useState<ReplySortOptions>('등록순');

  const totalReplyCount = replyPages ? replyPages[0].pages.totalElements : 0;
  const sortedReplyData = replyPages
    ? sortReply(replyPages.map((page) => page.list).flat(), sortOption)
    : [];

  return (
    <section className="flex grow flex-col">
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
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : status === 'error' ? (
        <div>에러</div>
      ) : sortedReplyData.length > 0 ? (
        <EndObserverList
          isEndHandler={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          className="flex h-full flex-col px-2xs py-3xs"
        >
          {sortedReplyData.map((reply) => (
            <Reply key={reply.commentId} reply={reply} />
          ))}
        </EndObserverList>
      ) : (
        <NoReplies />
      )}

      <ReplyInput />
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
