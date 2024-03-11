import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';
import { patch } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';

type PatchNicknameRequest = {
  nickname: string;
};

type PatchNicknameResponse = {
  userId: number;
  nickname: string;
  modifiedAt: string;
};

const patchNickname = async ({ nickname }: PatchNicknameRequest) => {
  const response = await patch<SuccessResponse<PatchNicknameResponse>>('/user', { nickname });
  return response.data;
};

const useUpdateNicknameMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchNickname,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'], refetchType: 'all' });
      toast({ message: 'CHANGE_NICKNAME_SUCCESS' });
    },
    onError: () => {
      toast({ message: 'CHANGE_NICKNAME_FAIL' });
    },
  });
};

export default useUpdateNicknameMutation;
