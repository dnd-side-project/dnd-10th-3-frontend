import { useMutation, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';
import { VoteType } from '@/types/vote';

const useLikeVoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: donworryApi.vote.postLikeVote,
    onMutate: async ({ voteId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey.vote.detail(voteId) });
      const previousVoteDetail = queryClient.getQueryData<VoteType>(queryKey.vote.detail(voteId));
      queryClient.setQueryData(queryKey.vote.detail(voteId), (oldVoteDetail: VoteType) =>
        getOptimisticUpdatedLikesVoteDetailData(oldVoteDetail),
      );
      return { previousVoteDetail, voteId };
    },
    onError: (err, { voteId }, context) => {
      queryClient.setQueryData(queryKey.vote.detail(voteId), context?.previousVoteDetail);
    },
    onSettled: (data, error, { voteId }) => {
      queryClient.invalidateQueries({ queryKey: queryKey.vote.detail(voteId) });
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
