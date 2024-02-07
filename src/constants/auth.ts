import { env } from '@/lib/env';

export const KAKAO_LOGIN_URL = `${env.KAKAO_AUTH_URL}?response_type=code&client_id=${env.KAKAO_REST_API_KEY}&redirect_uri=${env.KAKAO_LOGIN_REDIRECT_URI}`;

export const TOKEN = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
};

export const CALLBACK_URL = 'callbackUrl';
