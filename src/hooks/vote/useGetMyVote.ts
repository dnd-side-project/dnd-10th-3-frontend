import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';

const useGetMyVote = () => {
  return useQuery({
    queryFn: donworryApi.vote.getMyVotes,
    queryKey: ['votes', 'mine'],
    retry: 1,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetMyVote;
