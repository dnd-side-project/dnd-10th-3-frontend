import { useMutation } from '@tanstack/react-query';

import { TEST } from '@/api/test/test';
import { TestFormType } from '@/types/test';

export const useCreateTestResult = () => {
  return useMutation({
    mutationFn: (data: TestFormType) => TEST.POST_RESULT(data),
  });
};
