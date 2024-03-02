import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';
import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteReplyType } from '@/types/vote';

type PostVoteReplyRequest = { voteId: number; content: string };

const postVoteReply = async ({ voteId, content }: PostVoteReplyRequest) => {
  const response = await post<SuccessResponse<VoteReplyType>>(`/comment/vote/${voteId}`, {
    content,
  });
  return response.data.data;
};

const useVoteReplyMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postVoteReply,
    onSuccess: async ({ voteId }) => {
      await queryClient.invalidateQueries({ queryKey: ['vote-reply', voteId] });
      toast({ message: 'REPLY_REGISTER_SUCCESS' });
    },
    onError: () => {
      toast({ message: 'REPLY_REGISTER_FAIL' });
    },
  });
};

export default useVoteReplyMutation;
