import { useMutation } from '@tanstack/react-query';

import { TEST } from '@/api/test/test';
import { TestFormType } from '@/types/test';

export const useCreateTestResult = () => {
  return useMutation({
    mutationFn: (data: TestFormType) => TEST.POST_RESULT(data),
    //TODO : 성공 및 에러 처리
    onSuccess: (response) => {
      console.log('Post 성공, id값', response.data.id);
    },
    onError: (error) => {
      console.log('Post 실패', error);
    },
  });
};
