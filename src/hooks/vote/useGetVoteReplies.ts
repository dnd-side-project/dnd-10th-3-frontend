import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteReplyType } from '@/types/vote';

type GetVoteRepliesResponse = VoteReplyType[];

type GetVoteRepliesRequest = {
  voteId: number;
};

// TODO: api func 정리 (+queryKey)
const getVoteReplies = async ({ voteId }: GetVoteRepliesRequest) => {
  const response = await get<SuccessResponse<GetVoteRepliesResponse>>(`/comment/${voteId}/all`);
  return response.data.data;
};

const useGetVoteReplies = ({ voteId }: GetVoteRepliesRequest) => {
  return useQuery({
    queryKey: ['vote-reply', voteId],
    queryFn: () => getVoteReplies({ voteId }),
  });
};

export default useGetVoteReplies;
