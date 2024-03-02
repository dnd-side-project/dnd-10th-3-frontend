import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

type GetVoteByIdRequest = { voteId: number };
type GetVoteByIdResponseType = VoteType;

// TODO api 분리
const getVoteById = async ({ voteId }: GetVoteByIdRequest) => {
  const response = await get<SuccessResponse<GetVoteByIdResponseType>>(`/vote/${voteId}`);
  return response.data.data;
};

export const useGetVoteById = (voteId: number) => {
  return useQuery({
    queryKey: ['vote', voteId],
    queryFn: () => getVoteById({ voteId }),
  });
};
