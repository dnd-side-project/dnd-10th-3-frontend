import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

export const useGetBestVote = () => {
  return useQuery({
    queryKey: queryKey.vote.best(),
    queryFn: donworryApi.vote.getBestVote,
    select: ({ data }) => data,
  });
};
