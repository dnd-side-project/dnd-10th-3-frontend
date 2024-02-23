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
    onSuccess: () => {
      toast({ message: 'VOTING_SUCCESS' });
      queryClient.invalidateQueries({ queryKey: ['vote', voteId] });
    },
    onError: () => {
      toast({ message: 'VOTING_FAIL' });
    },
  });
};

export default useVotingMutation;
