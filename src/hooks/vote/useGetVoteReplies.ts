import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { GetVoteRepliesRequest } from '@/api/vote/types';

const useGetVoteReplies = ({ voteId }: GetVoteRepliesRequest) => {
  return useQuery({
    queryKey: ['vote-reply', voteId],
    queryFn: () => donworryApi.vote.getVoteReplies({ voteId }),
  });
};

export default useGetVoteReplies;
