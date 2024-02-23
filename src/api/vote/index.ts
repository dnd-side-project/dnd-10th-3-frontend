
import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteType } from '@/types/vote';

//api
const getAllVotes = async () => {
  const { data } = await get<SuccessResponse<VoteType[]>>('/vote/all');

  return data;
};

//api export
export const VOTE = {
  ALL: getAllVotes,
};
