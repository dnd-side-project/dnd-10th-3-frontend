import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';
import { del } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';

type DeleteVoteRequest = {
  voteId: number;
};

const deleteVote = async ({ voteId }: DeleteVoteRequest) => {
  const response = await del<SuccessResponse<undefined>>(`/vote/${voteId}`);
  return response.data;
};

const useDeleteVoteMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteVote,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['votes'], refetchType: 'all' });
      toast({ message: 'VOTE_DELETE_SUCCESS' });
    },
    onError: () => {
      toast({ message: 'VOTE_DELETE_FAIL' });
    },
  });
};

export default useDeleteVoteMutation;
