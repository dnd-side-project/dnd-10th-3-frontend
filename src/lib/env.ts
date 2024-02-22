export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

export const env = Object.freeze({
  KAKAO_AUTH_URL: `${process.env.NEXT_PUBLIC_KAKAO_AUTH_URL}`,
  KAKAO_REST_API_KEY: `${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
  KAKAO_LOGIN_REDIRECT_URI: isDevelopment
    ? `${process.env.NEXT_PUBLIC_DEV_KAKAO_LOGIN_REDIRECT_URI}`
    : `${process.env.NEXT_PUBLIC_PRD_KAKAO_LOGIN_REDIRECT_URI}`,
  BASE_API_URL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
});
