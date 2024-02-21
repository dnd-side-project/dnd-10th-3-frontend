import { CATEGORIES_FOR_TAB } from "@/constants/category";

import { UserType } from "../user";

export type VoteType = {
    id: number;
    user: UserType;
    title: string;
    content: string;
    selections: string[];
    likes: number;
    views: number;
    voter: number;
    status: boolean;
    category: (typeof CATEGORIES_FOR_TAB)[number];
    closeDate: string;
    createdAt: string;
    updateAt: string;
    selected: number;
  };