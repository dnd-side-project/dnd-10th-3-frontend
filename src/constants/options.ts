export const REPLY_SORT_OPTIONS = ['등록순', '공감순'] as const;
export type ReplySortOptions = (typeof REPLY_SORT_OPTIONS)[number];
