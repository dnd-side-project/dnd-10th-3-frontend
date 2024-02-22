import { useQuery } from '@tanstack/react-query';

import { VOTE } from '@/api/vote/vote';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetAllVotes = (tab: string) => {
  return useQuery({
    queryKey: QUERY_KEY.VOTE.ALL,
    queryFn: VOTE.ALL,
    // 필터링 기능 구현
    select: ({ data }) => {
      if (tab === '전체') return data;

      const result = data.filter((item) => item.category === tab);
      return result;
    },
  });
};
