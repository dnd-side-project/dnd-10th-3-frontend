import { useQuery } from '@tanstack/react-query';

import { donworryApi } from '@/api';

const useGetMyTest = () => {
  return useQuery({
    queryKey: ['result', 'mine'],
    queryFn: donworryApi.test.getMyTest,
  });
};

export default useGetMyTest;
