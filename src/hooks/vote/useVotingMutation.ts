import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';
import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';

type VotingFnVariables = {
  selectionId: number;
};

const useVotingMutation = (voteId: number) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ selectionId }: VotingFnVariables) =>
      post<SuccessResponse<Record<string, string>>>(
        `/userVote/voteId/${voteId}/selectionId/${selectionId}`,
      ),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['vote', voteId] });
      toast({ message: 'VOTING_SUCCESS', above: 'input' });
    },
    onError: () => {
      toast({ message: 'VOTING_FAIL', above: 'input' });
    },
  });
};

export default useVotingMutation;
