import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

const useGetMyVote = () => {
  return useQuery({
    queryFn: donworryApi.vote.getMyVotes,
    queryKey: queryKey.vote.myVotes(),
    retry: 1,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetMyVote;
