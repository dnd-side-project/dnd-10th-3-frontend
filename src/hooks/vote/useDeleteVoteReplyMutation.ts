import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';
import { del } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';

type DeleteVoteReplyRequest = {
  voteId: number;
  commentId: number;
};

const deleteVoteReply = async ({ commentId }: DeleteVoteReplyRequest) => {
  const response = await del<SuccessResponse<undefined>>(`/comment/${commentId}`);
  return response.data;
};

const useDeleteVoteReplyMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: deleteVoteReply,
    onSuccess: async (_, { voteId }) => {
      await queryClient.invalidateQueries({ queryKey: ['vote-reply', voteId] });
      toast({ message: 'REPLY_DELETE_SUCCESS', above: 'input' });
    },
    onError: () => {
      toast({ message: 'REPLY_DELETE_FAIL', above: 'input' });
    },
  });
};

export default useDeleteVoteReplyMutation;
