import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';
import { queryKey } from '@/api/queryKey';

const useGetMyTest = () => {
  return useQuery({
    queryKey: queryKey.test.myResult,
    queryFn: donworryApi.test.getMyTest,
  });
};

export default useGetMyTest;
