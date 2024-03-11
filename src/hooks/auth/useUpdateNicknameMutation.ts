import { useMutation, useQueryClient } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { useToast } from '@/hooks';

const useUpdateNicknameMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: donworryApi.auth.patchNickname,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKey.auth.user, refetchType: 'all' });
      toast({ message: 'CHANGE_NICKNAME_SUCCESS' });
    },
    onError: () => {
      toast({ message: 'CHANGE_NICKNAME_FAIL' });
    },
  });
};

export default useUpdateNicknameMutation;
