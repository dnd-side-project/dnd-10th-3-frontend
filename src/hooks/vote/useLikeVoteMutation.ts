import { useMutation, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';

import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

type PostLikeVoteRequest = {
  voteId: number;
};

type LikeVoteResponse = undefined;

// TODO api 분리
const postLikeVote = async ({ voteId }: PostLikeVoteRequest) => {
  const response = await post<SuccessResponse<LikeVoteResponse>>(`/vote/${voteId}/likes`);
  return response.data.data;
};

const useLikeVoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLikeVote,
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
