import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { Pages, SuccessResponse } from '@/types/response';
import { VoteReplyType } from '@/types/vote';

type GetVotePaginatedRepliesResponse = {
  list: VoteReplyType[];
  pages: Pages;
};

type GetVotePaginatedRepliesRequest = {
  voteId: number;
  page: number;
  size: number;
};

const INITIAL_PAGE_NO = 0;
const COMMENT_COUNT_PER_PAGE = 10;

// TODO: api func 정리 (+queryKey)
const getVotePaginatedReplies = async ({ voteId, page, size }: GetVotePaginatedRepliesRequest) => {
  const response = await get<SuccessResponse<GetVotePaginatedRepliesResponse>>(
    `/comment/${voteId}`,
    {
      params: { page, size },
    },
  );

  return response.data.data;
};

const useGetVotePaginatedReplies = ({ voteId }: Pick<GetVotePaginatedRepliesRequest, 'voteId'>) => {
  return useInfiniteQuery({
    queryKey: ['vote-reply', voteId],
    initialPageParam: { page: INITIAL_PAGE_NO, size: COMMENT_COUNT_PER_PAGE },
    queryFn: ({ pageParam }) =>
      getVotePaginatedReplies({ voteId, page: pageParam.page, size: pageParam.size }),
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

export default useGetVotePaginatedReplies;
