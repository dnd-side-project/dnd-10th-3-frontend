import { useMutation, useQueryClient } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { useToast } from '@/hooks';

const useDeleteVoteReplyMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: donworryApi.vote.deleteVoteReply,
    onSuccess: async (_, { voteId }) => {
      await queryClient.invalidateQueries({ queryKey: queryKey.vote.reply(voteId) });
      toast({ message: 'REPLY_DELETE_SUCCESS', above: 'input' });
    },
    onError: () => {
      toast({ message: 'REPLY_DELETE_FAIL', above: 'input' });
    },
  });
};

export default useDeleteVoteReplyMutation;
