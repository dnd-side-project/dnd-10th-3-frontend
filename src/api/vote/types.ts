import { Pages } from '@/types/response';
import { UserInfo } from '@/types/user';
import { SelectionType, VoteReplyType, VoteType } from '@/types/vote';

export type GetVoteByIdRequest = {
  voteId: VoteType['id'];
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

export type PostVoteReplyRequest = {
  voteId: VoteType['id'];
  content: VoteReplyType['content'];
  user: UserInfo;
};

export type DeleteVoteRequest = {
  voteId: VoteType['id'];
};

export type PostLikeVoteRequest = {
  voteId: VoteType['id'];
};

export type PostVotingRequest = {
  voteId: VoteType['id'];
  selectionId: SelectionType['id'];
};

export type GetVoteRepliesRequest = {
  voteId: VoteType['id'];
};

export type GetVotePaginatedRepliesResponse = {
  list: VoteReplyType[];
  pages: Pages;
};

export type GetVotePaginatedRepliesRequest = {
  voteId: VoteType['id'];
  page: number;
  size: number;
};

export type UpdateVoteReplyRequest = {
  commentId: VoteReplyType['commentId'];
  content: VoteReplyType['content'];
};

export type DeleteVoteReplyRequest = {
  voteId: VoteType['id'];
  commentId: VoteReplyType['commentId'];
};

export type PostLikeVoteReplyRequest = {
  voteId: VoteType['id'];
  commentId: VoteReplyType['commentId'];
};
