import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { TestResultFormType } from '@/types/test';

const getMyTest = async () => {
  const response = await get<SuccessResponse<TestResultFormType[]>>('/test/my');
  return response.data.data;
};

const useGetMyTest = () => {
  return useQuery({
    queryKey: ['result', 'mine'],
    queryFn: getMyTest,
  });
};

export default useGetMyTest;
