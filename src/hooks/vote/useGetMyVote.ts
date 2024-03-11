import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

const getMyVote = async () => {
  const response = await get<SuccessResponse<VoteType[]>>('/vote/mine');
  return response.data.data;
};

const useGetMyVote = () => {
  return useQuery({
    queryFn: getMyVote,
    queryKey: ['votes', 'mine'],
    retry: 1,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetMyVote;
