import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import cloneDeep from 'lodash.clonedeep';

import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

type LikeVoteFnVariables = {
  voteId: number;
  isLiked: boolean;
};

type LikeVoteResponse = undefined;

const useLikeVoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ voteId, isLiked }: LikeVoteFnVariables) =>
      post<SuccessResponse<LikeVoteResponse>>(`/vote/${voteId}/likes`, { status: isLiked }),
    onMutate: async ({ voteId, isLiked }) => {
      await queryClient.cancelQueries({ queryKey: ['vote', voteId] });
      const previousVoteDetail = queryClient.getQueryData<AxiosResponse<SuccessResponse<VoteType>>>(
        ['vote', voteId],
      );
      queryClient.setQueryData(
        ['vote', voteId],
        (oldVoteDetail: AxiosResponse<SuccessResponse<VoteType>>) =>
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

const getOptimisticUpdatedLikesVoteDetailData = (
  oldData: AxiosResponse<SuccessResponse<VoteType>>,
  isLiked: boolean,
) => {
  const clonedOldVoteDetail = cloneDeep(oldData);

  if (isLiked === true) {
    clonedOldVoteDetail.data.data.likes += 1;
  } else {
    clonedOldVoteDetail.data.data.likes -= 1;
  }
  clonedOldVoteDetail.data.data.status = isLiked;

  return clonedOldVoteDetail;
};

export default useLikeVoteMutation;
