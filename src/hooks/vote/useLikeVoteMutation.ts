import { useMutation, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';

import { donworryApi } from '@/api';
import { VoteType } from '@/types/vote';

const useLikeVoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: donworryApi.vote.postLikeVote,
    onMutate: async ({ voteId }) => {
      await queryClient.cancelQueries({ queryKey: ['vote', voteId] });
      const previousVoteDetail = queryClient.getQueryData<VoteType>(['vote', voteId]);
      queryClient.setQueryData(['vote', voteId], (oldVoteDetail: VoteType) =>
        getOptimisticUpdatedLikesVoteDetailData(oldVoteDetail),
      );
      return { previousVoteDetail, voteId };
    },
    onError: (err, { voteId }, context) => {
      queryClient.setQueryData(['vote', voteId], context?.previousVoteDetail);
    },
    onSettled: (data, error, { voteId }) => {
      queryClient.invalidateQueries({ queryKey: ['vote', voteId] });
    },
  });
};

const getOptimisticUpdatedLikesVoteDetailData = (oldData: VoteType) => {
  return produce(oldData, (draft) => {
    if (draft.isLiked === true) {
      draft.isLiked = false;
      draft.likes -= 1;
    } else {
      draft.isLiked = true;
      draft.likes += 1;
    }
  });
};

export default useLikeVoteMutation;
