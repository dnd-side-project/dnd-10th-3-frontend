//query key factory
export const TEST_KEY = {
  // TODO : 백엔드 API 나오면 필터링하는 로직 따로 구현해야합니다.
  GET_RESULT_BY_ID: (resultId: number) => ['result', resultId] as const,
};
