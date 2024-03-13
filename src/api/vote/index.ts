import { del, get, patch, post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { VoteReplyType, VoteType } from '@/types/vote';

import {
  DeleteVoteReplyRequest,
  DeleteVoteRequest,
  GetSearchVoteRequest,
  GetSearchVoteResponse,
  GetVoteByIdRequest,
  GetVotePaginatedRepliesRequest,
  GetVotePaginatedRepliesResponse,
  GetVoteRepliesRequest,
  PostLikeVoteReplyRequest,
  PostLikeVoteRequest,
  PostVoteReplyRequest,
  PostVotingRequest,
  UpdateVoteReplyRequest,
  VoteFormData,
} from './types';

/**
 * @description 전체 투표 목록 조회 api
 */
const getAllVotes = async () => {
  const { data } = await get<SuccessResponse<VoteType[]>>('/vote/all');
  return data;
};

/**
 * @description 투표 검색 결과 목록 조회 api
 */
const getVoteBySearch = async ({ keyword, page, size, sort }: GetSearchVoteRequest) => {
  const response = await get<SuccessResponse<GetSearchVoteResponse>>(`/vote/search/${keyword}`, {
    params: { page, size, sort },
  });
  return response.data.data;
};

/**
 * @description 회원이 작성한 투표 목록 조회 api
 */
const getMyVotes = async () => {
  const response = await get<SuccessResponse<VoteType[]>>('/vote/mine');
  return response.data.data;
};

/**
 * @description 베스트 투표 조회 api
 */
const getBestVote = async () => {
  const { data } = await get<SuccessResponse<VoteType>>('/vote/best');
  return data;
};

/**
 * @description 투표 상세 조회 api
 */
const getVoteById = async ({ voteId }: GetVoteByIdRequest) => {
  const response = await get<SuccessResponse<VoteType>>(`/vote/${voteId}`);
  return response.data.data;
};

/**
 * @description 투표 등록 api
 */
const postVote = async (data: VoteFormData) => {
  const response = await post<SuccessResponse<VoteType>>('/vote', data, {
    headers: { 'Content-Type': 'form-data' },
  });
  return response.data.data;
};

/**
 * @description 투표 삭제 api
 */
const deleteVote = async ({ voteId }: DeleteVoteRequest) => {
  const response = await del<SuccessResponse<undefined>>(`/vote/${voteId}`);
  return response.data;
};

/**
 * @description 투표 공감 api
 */
export const postLikeVote = async ({ voteId }: PostLikeVoteRequest) => {
  const response = await post<SuccessResponse<undefined>>(`/vote/${voteId}/likes`);
  return response.data.data;
};

/**
 * @description 투표 참여 api
 */
export const postVoting = async ({ voteId, selectionId }: PostVotingRequest) => {
  const response = await post<SuccessResponse<Record<string, string>>>(
    `/userVote/voteId/${voteId}/selectionId/${selectionId}`,
  );
  return response.data.data;
};
/**
 * @description 투표 댓글 목록 조회 api
 */
export const getVoteReplies = async ({ voteId }: GetVoteRepliesRequest) => {
  const response = await get<SuccessResponse<VoteReplyType[]>>(`/comment/${voteId}/all`);
  return response.data.data;
};

/**
 * @description 투표 댓글 목록 페이지네이션 조회 api
 */
const getVotePaginatedReplies = async ({ voteId, page, size }: GetVotePaginatedRepliesRequest) => {
  const response = await get<SuccessResponse<GetVotePaginatedRepliesResponse>>(
    `/comment/${voteId}`,
    {
      params: { page, size },
    },
  );
  return response.data.data;
};

/**
 * @description 투표 댓글 등록 api
 */
export const postVoteReply = async ({ voteId, content }: PostVoteReplyRequest) => {
  const response = await post<SuccessResponse<VoteReplyType>>(`/comment/vote/${voteId}`, {
    content,
  });
  return response.data.data;
};

/**
 * @description 투표 댓글 수정 api
 */
export const updateVoteReply = async ({ commentId, content }: UpdateVoteReplyRequest) => {
  const resposne = await patch<SuccessResponse<VoteReplyType>>(`/comment/${commentId}`, {
    content,
  });
  return resposne.data.data;
};

/**
 * @description 투표 댓글 삭제 api
 */
const deleteVoteReply = async ({ commentId }: DeleteVoteReplyRequest) => {
  const response = await del<SuccessResponse<undefined>>(`/comment/${commentId}`);
  return response.data;
};

/**
 * @description 투표 댓글 공감 api
 */
const postLikeVoteReply = async ({ commentId }: PostLikeVoteReplyRequest) => {
  const response = await post<SuccessResponse<undefined>>(`/comment/${commentId}/likes`);
  return response.data;
};

export const vote = {
  getAllVotes,
  getVoteBySearch,
  getMyVotes,
  getBestVote,
  getVoteById,
  postVote,
  deleteVote,

  postLikeVote,
  postVoting,

  getVoteReplies,
  getVotePaginatedReplies,
  postVoteReply,
  updateVoteReply,
  deleteVoteReply,
  postLikeVoteReply,
};
