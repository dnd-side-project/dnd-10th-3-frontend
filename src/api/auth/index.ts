import { del, get, patch, post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';
import { UserInfo } from '@/types/user';

import { LoginRequest, LoginResponse, PatchNicknameRequest, PatchNicknameResponse } from './types';

/**
 * @description 카카오 로그인 api
 */
const kakaoLogin = async ({ authorizeCode }: LoginRequest) => {
  const response = await get<SuccessResponse<LoginResponse>>(
    `/login/oauth2/code/kakao?code=${authorizeCode}`,
    { baseURL: 'https://donworry.online' },
  );
  return response.data.data;
};

/**
 * @description 로그아웃 api
 */
const logOut = async () => {
  const response = await post<SuccessResponse<undefined>>('/user/logout');
  return response.data;
};

/**
 * @description 회원탈퇴 api
 */
const withdraw = async () => {
  const response = await del<SuccessResponse<undefined>>('/user');
  return response.data;
};

/**
 * @description 회원 정보 조회 api
 */
const getUser = async () => {
  const response = await get<SuccessResponse<UserInfo>>('/user');
  return response.data.data;
};

/**
 * @description 회원 닉네임 수정 api
 */
const patchNickname = async ({ nickname }: PatchNicknameRequest) => {
  const response = await patch<SuccessResponse<PatchNicknameResponse>>('/user', { nickname });
  return response.data.data;
};

export const auth = {
  kakaoLogin,
  logOut,
  withdraw,
  getUser,
  patchNickname,
};
