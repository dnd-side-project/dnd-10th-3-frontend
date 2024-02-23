import { useQuery } from '@tanstack/react-query';

import { VOTE } from '@/api/vote';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetBestVote = () => {
  return useQuery({
    queryKey: QUERY_KEY.VOTE.BEST,
    queryFn: VOTE.BEST_VOTE,
    select: ({ data }) => data,
  });
};
