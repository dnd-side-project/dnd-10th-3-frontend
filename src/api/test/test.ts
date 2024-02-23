import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { TestFormResponseType, TestFormType } from '@/types/test';

//api

const postTestResult = async (data: TestFormType) => {
  const {data : result} = await post<SuccessResponse<TestFormResponseType>>('/test/result', data);

  return result;
};

//api export
export const TEST = {
  POST_RESULT: postTestResult,
};
