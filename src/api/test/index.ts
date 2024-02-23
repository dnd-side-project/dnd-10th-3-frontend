import { get, post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { TestFormResponseType, TestFormType } from '@/types/test';

//api

const postTestResult = async (data: TestFormType) => {
  const {data : result} = await post<SuccessResponse<TestFormResponseType>>('/test/result', data);

  return result;
};

const getTestResultById = async (id: number) => {
  const {data} = await get<SuccessResponse<TestFormResponseType>>(`/test/result/${id}`);

  return data;
};

//api export
export const TEST = {
  GET_RESULT_BY_ID : getTestResultById,
  POST_RESULT: postTestResult
};
