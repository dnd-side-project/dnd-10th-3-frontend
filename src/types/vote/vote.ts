import { CATEGORIES } from "@/constants/category";

import { UserType } from "../user";

export type VoteType = {
    id: number;
    user: UserType;
    title: string;
    content: string;
    selections: string[];
    likes: number;
    views: number;
    voters: number;
    status: boolean;
    category: (typeof CATEGORIES)[number];
    closeDate: string;
    createdAt: string;
    updatedAt: string;
    selected: number;
  };