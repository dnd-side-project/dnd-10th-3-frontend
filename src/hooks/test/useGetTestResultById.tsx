import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

export const useGetTestResultById = (id: number) => {
  return useQuery({
    queryKey: queryKey.test.result(id),
    queryFn: () => donworryApi.test.getResultById(id),
  });
};
