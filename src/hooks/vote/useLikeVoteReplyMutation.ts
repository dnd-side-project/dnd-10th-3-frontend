import { useMutation, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';

import { useToast } from '@/hooks';
import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteReplyType } from '@/types/vote';

type PostLikeVoteReplyRequest = {
  voteId: number;
  commentId: number;
};

type LikeVoteReplyResponse = undefined;

const postLikeVoteReply = async ({ commentId }: PostLikeVoteReplyRequest) => {
  const response = await post<SuccessResponse<LikeVoteReplyResponse>>(
    `/comment/${commentId}/likes`,
  );
  return response.data;
};

const useLikeVoteReplyMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: postLikeVoteReply,
    onMutate: async ({ voteId, commentId }) => {
      await queryClient.cancelQueries({ queryKey: ['vote-reply', voteId] });
      const previousVoteReplies = queryClient.getQueryData<VoteReplyType[]>(['vote-reply', voteId]);
      queryClient.setQueryData(['vote-reply', voteId], (oldVoteReplies: VoteReplyType[]) =>
        getOptimisticUpdatedVoteRepliesData(oldVoteReplies, { commentId }),
      );
      return { previousVoteReplies };
    },
    onError: (err, { voteId }, context) => {
      queryClient.setQueryData(['vote-reply', voteId], context?.previousVoteReplies);
      toast({ message: 'ERROR' });
    },
    onSettled: (data, err, { voteId }) => {
      queryClient.invalidateQueries({ queryKey: ['vote-reply', voteId] });
    },
  });
};

const getOptimisticUpdatedVoteRepliesData = (
  oldData: VoteReplyType[],
  { commentId }: Pick<PostLikeVoteReplyRequest, 'commentId'>,
) => {
  return produce(oldData, (draft) => {
    const targetReply = draft.find((reply) => reply.commentId === commentId);
    if (!targetReply) return;
    if (targetReply.status === true) {
      targetReply.status = false;
      targetReply.likes -= 1;
    } else {
      targetReply.status = true;
      targetReply.likes += 1;
    }
  });
};

export default useLikeVoteReplyMutation;
