import { useMutation } from '@tanstack/react-query';

import { donworryApi } from '@/api';

export const useCreateTestResult = () => {
  return useMutation({
    mutationFn: donworryApi.test.postResult,
  });
};
