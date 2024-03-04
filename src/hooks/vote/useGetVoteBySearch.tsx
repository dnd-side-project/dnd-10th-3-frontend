import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { Pages, SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

type GetSearchVoteResponse = {
  list: VoteType[];
  pages: Pages;
};

type GetSearchVoteRequest = {
  keyword: string;
  page: number;
  size: number;
  sort: string;
};

const getVoteBySearch = async ({ keyword, page, size, sort }: GetSearchVoteRequest) => {
  const response = await get<SuccessResponse<GetSearchVoteResponse>>(`/vote/search/${keyword}`, {
    params: { page, size, sort },
  });

  return response.data.data;
};

const INITIAL_PAGE_NO = 0;
const VOTE_COUNT_PER_PAGE = 5;

export const useGetVoteBySearch = ({ keyword }: Pick<GetSearchVoteRequest, 'keyword'>) => {
  return useInfiniteQuery({
    queryKey: ['votes', keyword],
    initialPageParam: { page: INITIAL_PAGE_NO, size: VOTE_COUNT_PER_PAGE },
    queryFn: ({ pageParam }) =>
      getVoteBySearch({ keyword, page: pageParam.page, size: pageParam.size, sort: 'createdAt' }),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      console.log(lastPage);
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
