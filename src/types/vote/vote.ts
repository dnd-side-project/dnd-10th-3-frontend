import { CATEGORIES } from '@/constants/category';

import { UserType } from '../user';

export type SelectionType = {
  content: string;
  count: number;
  id: number;
  imagePath: string;
  votePercentage: number;
};

export type VoteType = {
  id: number;
  user: UserType;
  title: string;
  content: string;
  selections: SelectionType[];
  likes: number;
  views: number;
  voters: number;
  status: boolean;
  category: (typeof CATEGORIES)[number];
  closeDate: string;
  createdAt: string;
  updatedAt: string;
  selected: null | number;
  isLiked: boolean;
};

export type VoteReplyType = {
  commentId: number;
  voteId: number;
  userId: number;
  nickname: string;
  status: boolean;
  content: string;
  avatar: string;
  likes: number;
  createdAt: string;
  modifiedAt: string;
};
