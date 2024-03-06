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
  const addSpaceBarInKeywordByDefault = keyword === '' ? ' ' : keyword;

  return useInfiniteQuery({
    queryKey: ['votes', addSpaceBarInKeywordByDefault],
    initialPageParam: { page: INITIAL_PAGE_NO, size: VOTE_COUNT_PER_PAGE },
    queryFn: ({ pageParam }) =>
      getVoteBySearch({
        keyword: addSpaceBarInKeywordByDefault,
        page: pageParam.page,
        size: pageParam.size,
        //TODO : 다른 PR에서 정렬 기능 구현 예정
        sort: 'createdAt',
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
    // HERE : 아예 select에 구현해놓는건 어떨까요?
    select: (data) => (data.pages ? data.pages.map((page) => page.list).flat() : []),
  });
};
