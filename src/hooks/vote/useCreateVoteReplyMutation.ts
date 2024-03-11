import { useMutation, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';

import { donworryApi } from '@/api';
import { PostVoteReplyRequest } from '@/api/vote/types';
import { useToast } from '@/hooks';
import { VoteReplyType } from '@/types/vote';

const useCreateVoteReplyMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: donworryApi.vote.postVoteReply,
    onMutate: async ({ voteId, content }) => {
      await queryClient.cancelQueries({ queryKey: ['vote-reply', voteId] });
      const previousVoteReplies = queryClient.getQueryData<VoteReplyType[]>(['vote-reply', voteId]);
      queryClient.setQueryData(['vote-reply', voteId], (oldVoteReplies: VoteReplyType[]) =>
        getOptimisticUpdatedVoteRepliesData(oldVoteReplies, { voteId, content }),
      );
      return { previousVoteReplies, voteId };
    },
    onError: (err, { voteId }, context) => {
      queryClient.setQueryData(['vote-reply', voteId], context?.previousVoteReplies);
      toast({ message: 'REPLY_REGISTER_FAIL', above: 'input' });
    },
    onSettled: (data, error, { voteId }) => {
      queryClient.invalidateQueries({ queryKey: ['vote-reply', voteId] });
      toast({ message: 'REPLY_REGISTER_SUCCESS', above: 'input' });
    },
  });
};

const getOptimisticUpdatedVoteRepliesData = (
  oldData: VoteReplyType[],
  { voteId, content }: PostVoteReplyRequest,
) => {
  return produce(oldData, (draft) => {
    draft.push({
      voteId,
      content,
      commentId: -1,
      userId: 0,
      nickname: '등록중...', // TODO 사용자 닉네임
      status: false,
      avatar: '',
      likes: 0,
      createdAt: Date.now().toString(),
      modifiedAt: Date.now().toString(),
    });
  });
};

export default useCreateVoteReplyMutation;
