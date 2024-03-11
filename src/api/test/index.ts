import { get, post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { TestFormType, TestResultFormType } from '@/types/test';

/**
 * @description 테스트 결과 저장 api
 */
const postTestResult = async (data: TestFormType) => {
  const response = await post<SuccessResponse<TestResultFormType>>('/test/result', data);
  return response.data.data;
};

/**
 * @description 테스트 결과 조회 api
 */
const getTestResultById = async (id: number) => {
  const response = await get<SuccessResponse<TestResultFormType>>(`/test/result/${id}`);
  return response.data.data;
};

/**
 * @description 회원의 지난 테스트 결과 조회 api
 */
const getMyTest = async () => {
  const response = await get<SuccessResponse<TestResultFormType[]>>('/test/my');
  return response.data.data;
};

export const test = {
  getResultById: getTestResultById,
  postResult: postTestResult,
  getMyTest,
};
