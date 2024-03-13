export type LoginRequest = {
  authorizeCode: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  nickname: string;
};

export type PatchNicknameRequest = {
  nickname: string;
};

export type PatchNicknameResponse = {
  userId: number;
  nickname: string;
  modifiedAt: string;
};
