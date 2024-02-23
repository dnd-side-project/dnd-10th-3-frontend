import { useQuery } from '@tanstack/react-query';

import { TEST } from '@/api/test';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetTestResultById = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEY.TEST.GET_RESULT_BY_ID(id),
    queryFn: () => TEST.GET_RESULT_BY_ID(id),
    // FIXME : data.data 방지하기 위해 select 사용하였습니다.
    select: ({ data }) => data,
  });
};
