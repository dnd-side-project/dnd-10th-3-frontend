import { useMutation, useQueryClient } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { useToast } from '@/hooks';

const useVotingMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: donworryApi.vote.postVoting,
    onSuccess: async (_, { voteId }) => {
      await queryClient.invalidateQueries({ queryKey: ['vote', voteId] });
      toast({ message: 'VOTING_SUCCESS', above: 'input' });
    },
    onError: () => {
      toast({ message: 'VOTING_FAIL', above: 'input' });
    },
  });
};

export default useVotingMutation;
