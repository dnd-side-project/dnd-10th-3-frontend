import { useSuspenseQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

export const useGetVoteById = (voteId: number) => {
  return useSuspenseQuery({
    queryKey: queryKey.vote.detail(voteId),
    queryFn: () => donworryApi.vote.getVoteById({ voteId }),
  });
};
