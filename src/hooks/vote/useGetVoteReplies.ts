import { useSuspenseQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { GetVoteRepliesRequest } from '@/api/vote/types';

const useGetVoteReplies = ({ voteId }: GetVoteRepliesRequest) => {
  return useSuspenseQuery({
    queryKey: queryKey.vote.reply(voteId),
    queryFn: () => donworryApi.vote.getVoteReplies({ voteId }),
  });
};

export default useGetVoteReplies;
