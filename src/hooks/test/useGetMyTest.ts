import { useSuspenseQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

const useGetMyTest = () => {
  return useSuspenseQuery({
    queryKey: queryKey.test.myResult,
    queryFn: donworryApi.test.getMyTest,
  });
};

export default useGetMyTest;
