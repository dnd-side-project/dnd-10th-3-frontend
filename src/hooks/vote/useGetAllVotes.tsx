import { useQuery } from '@tanstack/react-query';

import { VOTE } from '@/api/vote/vote';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetAllVotes = () => {
  return useQuery({
    queryKey: QUERY_KEY.VOTE.ALL,
    queryFn: VOTE.ALL,
  });
};
