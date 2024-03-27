export const voteKeys = {
  all: ['votes'] as const,

  lists: () => [...voteKeys.all, 'list'] as const,
  best: () => [...voteKeys.lists(), 'best'] as const,
  myVotes: () => [...voteKeys.lists(), 'mine'] as const,
  search: (keyword: string) => [...voteKeys.lists(), { keyword }] as const,

  details: () => [...voteKeys.all, 'detail'] as const,
  detail: (voteId: number) => [...voteKeys.details(), voteId] as const,

  replies: () => [...voteKeys.all, 'detail', 'reply'] as const,
  reply: (voteId: number) => [...voteKeys.all, 'detail', 'reply', voteId] as const,
};
