import { Pages } from '@/types/response';
import { VoteReplyType, VoteType } from '@/types/vote';

export type GetVoteByIdRequest = {
  voteId: number;
};

export type GetSearchVoteResponse = {
  list: VoteType[];
  pages: Pages;
};

export type GetSearchVoteRequest = {
  keyword: string;
  page: number;
  size: number;
  sort: string;
};

export interface VoteFormData extends FormData {
  append(name: 'voteRequestDto' | 'images', value: string | Blob): void;
}

export type PostVoteReplyRequest = { voteId: number; content: string };

export type DeleteVoteRequest = {
  voteId: number;
};

export type PostLikeVoteRequest = {
  voteId: number;
};

export type PostVotingRequest = {
  voteId: number;
  selectionId: number;
};

export type GetVoteRepliesRequest = {
  voteId: number;
};

export type GetVotePaginatedRepliesResponse = {
  list: VoteReplyType[];
  pages: Pages;
};

export type GetVotePaginatedRepliesRequest = {
  voteId: number;
  page: number;
  size: number;
};

export type UpdateVoteReplyRequest = {
  commentId: number;
  content: string;
};

export type DeleteVoteReplyRequest = {
  voteId: number;
  commentId: number;
};

export type PostLikeVoteReplyRequest = {
  voteId: number;
  commentId: number;
};
