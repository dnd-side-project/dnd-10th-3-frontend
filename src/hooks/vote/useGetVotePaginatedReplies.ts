import { useInfiniteQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

const INITIAL_PAGE_NO = 0;
const COMMENT_COUNT_PER_PAGE = 10;

const useGetVotePaginatedReplies = (voteId: number) => {
  return useInfiniteQuery({
    queryKey: queryKey.vote.reply(voteId),
    initialPageParam: { page: INITIAL_PAGE_NO, size: COMMENT_COUNT_PER_PAGE },
    queryFn: ({ pageParam }) =>
      donworryApi.vote.getVotePaginatedReplies({
        voteId,
        page: pageParam.page,
        size: pageParam.size,
      }),
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
