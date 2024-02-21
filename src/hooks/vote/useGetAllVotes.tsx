import { useQuery } from '@tanstack/react-query';

import { VOTE } from '@/app/api/v1/vote/vote';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetAllVotes = () => {
  return useQuery({
    queryKey: QUERY_KEY.VOTE.ALL,
    queryFn: VOTE.ALL,
  });
};
