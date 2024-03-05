import { useMutation } from '@tanstack/react-query';

import { patch } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteReplyType } from '@/types/vote';

type UpdateVoteReplyRequest = {
  commentId: number;
  content: string;
};

const updateVoteReply = async ({ commentId, content }: UpdateVoteReplyRequest) => {
  const resposne = await patch<SuccessResponse<VoteReplyType>>(`/comment/${commentId}`, {
    content,
  });
  return resposne.data.data;
};

const useUpdateVoteReplyMutation = () => {
  return useMutation({
    mutationFn: updateVoteReply,
  });
};

export default useUpdateVoteReplyMutation;
