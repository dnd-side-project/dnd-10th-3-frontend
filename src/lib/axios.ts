import axios from 'axios';

import { env } from './env';

const instance = axios.create({
  baseURL: env.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  withCredentials: true,
  timeout: 10000,
});

// 요청 인터셉터
instance.interceptors.request.use(
  function fullfilledRequestInterceptor(config) {
    // TODO 요청이 전달되기 전에 작업 수행
    // 액세스 토큰이 있다면 Authorization에 달기
    return config;
  },
  function rejectedRequestInterceptor(error) {
    // TODO 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  function fullfilledResponseInterceptor(response) {
    // NOTE 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // TODO 응답 데이터가 있는 작업 수행
    return response;
  },
  function rejectedResponseInterceptor(error) {
    // NOTE 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // TODO 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  return instance.get<T, T>(...args);
};

export const post = <T>(...args: Parameters<typeof instance.post>) => {
  return instance.post<T, T>(...args);
};

export const put = <T>(...args: Parameters<typeof instance.put>) => {
  return instance.put<T, T>(...args);
};

export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
  return instance.patch<T, T>(...args);
};

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T, T>(...args);
};
