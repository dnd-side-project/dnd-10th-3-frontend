import { post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { TestFormType } from '@/types/test';

//api

const postTestResult = async (data: TestFormType) => {
  const {data : result} = await post<SuccessResponse<TestFormType>>('/test/result', data);

  return result;
};

//api export
export const TEST = {
  POST_RESULT: postTestResult,
};
