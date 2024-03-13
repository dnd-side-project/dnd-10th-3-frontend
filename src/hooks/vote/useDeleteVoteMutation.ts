import { useMutation, useQueryClient } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { useToast } from '@/hooks';

const useDeleteVoteMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: donworryApi.vote.deleteVote,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKey.vote.lists(), refetchType: 'all' });
      toast({ message: 'VOTE_DELETE_SUCCESS' });
    },
    onError: () => {
      toast({ message: 'VOTE_DELETE_FAIL' });
    },
  });
};

export default useDeleteVoteMutation;
