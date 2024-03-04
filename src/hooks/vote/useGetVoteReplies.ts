import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { Pages, SuccessResponse } from '@/types/response';
import { VoteReplyType } from '@/types/vote';

type GetVoteRepliesResponse = {
  list: VoteReplyType[];
  pages: Pages;
};

type GetVoteRepliesRequest = {
  voteId: number;
  page: number;
  size: number;
};

const INITIAL_PAGE_NO = 0;
const COMMENT_COUNT_PER_PAGE = 10;

// TODO: api func 정리 (+queryKey)
const getVoteReplies = async ({ voteId, page, size }: GetVoteRepliesRequest) => {
  const response = await get<SuccessResponse<GetVoteRepliesResponse>>(`/comment/${voteId}`, {
    params: { page, size },
  });

  return response.data.data;
};

const useGetVoteReplies = ({ voteId }: Pick<GetVoteRepliesRequest, 'voteId'>) => {
  return useInfiniteQuery({
    queryKey: ['vote-reply', voteId],
    initialPageParam: { page: INITIAL_PAGE_NO, size: COMMENT_COUNT_PER_PAGE },
    queryFn: ({ pageParam }) =>
      getVoteReplies({ voteId, page: pageParam.page, size: pageParam.size }),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const hasNextPage = lastPage.pages.hasNext;
      if (hasNextPage) {
        return {
          page: lastPageParam.page + 1,
          size: lastPageParam.size,
        };
      }
      return null;
    },
    select: (data) => data.pages,
  });
};

export default useGetVoteReplies;
