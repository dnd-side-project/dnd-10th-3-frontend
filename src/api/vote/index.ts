
import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

//api
const getAllVotes = async () => {
  const { data } = await get<SuccessResponse<VoteType[]>>('/vote/all');

  return data;
};

const getBestVote = async () => {
  const { data } = await get<SuccessResponse<VoteType>>('/vote/best');

  return data;
};


//api export
export const VOTE = {
  ALL: getAllVotes,
  BEST_VOTE : getBestVote
};
