import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';

export const useGetVoteById = (voteId: number) => {
  return useQuery({
    queryKey: ['vote', voteId],
    queryFn: () => donworryApi.vote.getVoteById({ voteId }),
  });
};
