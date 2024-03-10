export type KakaoLoginFnVariables = {
  authorizeCode: string;
  callbackUrl: string;
};

export type KakaoLoginResponseData = {
  accessToken: string;
  refreshToken: string;
  nickname: string;
};
