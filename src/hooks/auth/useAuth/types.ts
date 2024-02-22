export type KakaoLoginFnVariables = {
  authorizeCode: string;
  callbackUrl: string;
};

export type KakaoLoginResponseData = {
  accessToken: string;
  refreshToken: string;
  nickname: string;
};

export type UpdateNicknameFnVariables = {
  nickname: string;
};

export type UpdateNicknameResponseData = {
  userId: number;
  nickname: string;
  modifiedAt: string;
};
