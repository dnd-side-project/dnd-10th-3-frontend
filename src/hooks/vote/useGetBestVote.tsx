import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetBestVote = () => {
  return useQuery({
    queryKey: QUERY_KEY.VOTE.BEST,
    queryFn: donworryApi.vote.getBestVote,
    select: ({ data }) => data,
  });
};
