import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { QUERY_KEY } from '@/constants/queryKey';

export const useGetTestResultById = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEY.TEST.GET_RESULT_BY_ID(id),
    queryFn: () => donworryApi.test.getResultById(id),
  });
};
