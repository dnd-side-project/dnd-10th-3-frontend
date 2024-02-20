import { useMutation } from '@tanstack/react-query';

import { post } from '@/lib/axios';

export type TestRequest = {
  age: string;
  gender: string;
  buddy: string;
  trust: number;
  love: number;
  talk: number;
};

type TestResponse = {
  code: number;
  message: string;
  data: TestResponseDataType;
};

type TestResponseDataType = TestRequest & {
  temperature: number;
  imageUrl: string;
  description: string;
  title: string;
  createdAt: string;
};

// type TestResponse = {};

export const useCreateTestResult = () => {
  return useMutation({
    mutationFn: (data: TestRequest) => post<TestResponse>('/test/result_no_user', data),
    //TODO : 성공 및 에러 처리
    onSuccess: () => {
      console.log('Post 성공');
    },
    onError: () => {
      console.log('Post 실패');
    },
  });
};
