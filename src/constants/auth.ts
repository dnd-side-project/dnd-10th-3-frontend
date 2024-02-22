import { env } from '@/lib/env';

export const KAKAO_LOGIN_URL = `${env.KAKAO_AUTH_URL}?response_type=code&client_id=${env.KAKAO_REST_API_KEY}&redirect_uri=${env.KAKAO_LOGIN_REDIRECT_URI}`;

export const TOKEN = {
  ACCESS_TOKEN: 'Access-Token',
  REFRESH_TOKEN: 'Refresh-Token',
};

export const IS_LOGIN = 'isLogin';
export const CALLBACK_URL = 'callbackUrl';

export const LOGIN_MESSAGE = {
  DEFAULT: '결혼식 논쟁 해결해요',
  VOTE: '투표 결과 알아봐요',
  CREATE: '결혼식 참석 고민 나눠봐요',
};
