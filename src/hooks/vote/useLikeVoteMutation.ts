import { useMutation, useQueryClient } from '@tanstack/react-query';
import cloneDeep from 'lodash.clonedeep';

import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

type PostLikeVoteRequest = {
  voteId: number;
  isLiked: boolean;
};

type LikeVoteResponse = undefined;

// TODO api 분리
const postLikeVote = async ({ voteId, isLiked }: PostLikeVoteRequest) => {
  const response = await post<SuccessResponse<LikeVoteResponse>>(`/vote/${voteId}/likes`, {
    isLiked,
  });
  return response.data.data;
};

const useLikeVoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLikeVote,
    onMutate: async ({ voteId, isLiked }) => {
      await queryClient.cancelQueries({ queryKey: ['vote', voteId] });
      const previousVoteDetail = queryClient.getQueryData<VoteType>(['vote', voteId]);
      queryClient.setQueryData(['vote', voteId], (oldVoteDetail: VoteType) =>
        getOptimisticUpdatedLikesVoteDetailData(oldVoteDetail, isLiked),
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

const getOptimisticUpdatedLikesVoteDetailData = (oldData: VoteType, isLiked: boolean) => {
  const clonedOldVoteDetail = cloneDeep(oldData);

  if (isLiked === true) {
    clonedOldVoteDetail.likes += 1;
  } else {
    clonedOldVoteDetail.likes -= 1;
  }
  clonedOldVoteDetail.isLiked = isLiked;

  return clonedOldVoteDetail;
};

export default useLikeVoteMutation;
