import { useMutation, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { PostLikeVoteReplyRequest } from '@/api/vote/types';
import { useToast } from '@/hooks';
import { VoteReplyType } from '@/types/vote';

const useLikeVoteReplyMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: donworryApi.vote.postLikeVoteReply,
    onMutate: async ({ voteId, commentId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey.vote.reply(voteId) });
      const previousVoteReplies = queryClient.getQueryData<VoteReplyType[]>(
        queryKey.vote.reply(voteId),
      );
      queryClient.setQueryData(queryKey.vote.reply(voteId), (oldVoteReplies: VoteReplyType[]) =>
        getOptimisticUpdatedVoteRepliesData(oldVoteReplies, { commentId }),
      );
      return { previousVoteReplies };
    },
    onError: (err, { voteId }, context) => {
      queryClient.setQueryData(queryKey.vote.reply(voteId), context?.previousVoteReplies);
      toast({ message: 'ERROR', above: 'input' });
    },
    onSettled: (data, err, { voteId }) => {
      queryClient.invalidateQueries({ queryKey: queryKey.vote.reply(voteId) });
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
