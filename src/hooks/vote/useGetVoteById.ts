import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

type GetVoteByIdResponseType = VoteType;

export const useGetVoteById = (voteId: number) => {
  return useQuery({
    queryKey: ['vote', voteId],
    queryFn: () => get<SuccessResponse<GetVoteByIdResponseType>>(`/vote/${voteId}`),
    select: (data) => data.data.data,
  });
};
