import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

export const useGetVoteById = (voteId: number) => {
  return useQuery({
    queryKey: queryKey.vote.detail(voteId),
    queryFn: () => donworryApi.vote.getVoteById({ voteId }),
  });
};
