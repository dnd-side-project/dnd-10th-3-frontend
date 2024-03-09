import { useMutation } from '@tanstack/react-query';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { IS_LOGIN } from '@/constants/auth';
import { useToast } from '@/hooks';
import { del, get, post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';

import {
  KakaoLoginFnVariables,
  KakaoLoginResponseData,
  UpdateNicknameFnVariables,
  UpdateNicknameResponseData,
} from './types';

const useAuth = () => {
  const router = useRouter();
  const toast = useToast();

  const kakaoLogin = useCallback(
    async ({ authorizeCode, callbackUrl }: KakaoLoginFnVariables) => {
      try {
        await get<SuccessResponse<KakaoLoginResponseData>>(
          `/login/oauth2/code/kakao?code=${authorizeCode}`,
          { baseURL: 'https://donworry.online' },
        );
        setCookie(IS_LOGIN, true, { maxAge: 60 * 60 * 24 * 14 });
        toast({ message: 'LOGIN_SUCCESS' });
        router.replace(decodeURIComponent(callbackUrl));
      } catch (error) {
        toast({ message: 'LOGIN_FAIL' });
        router.replace(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
      }
    },
    [router, toast],
  );

  const { mutate: logout } = useMutation({
    mutationFn: () => post('/user/logout'),
    onSuccess: () => {
      deleteCookie(IS_LOGIN);
      toast({ message: 'LOGOUT_SUCCESS' });
      router.replace('/');
      router.refresh();
    },
    onError: () => {
      toast({ message: 'LOGOUT_FAIL' });
    },
  });

  const { mutate: updateNickname } = useMutation({
    mutationFn: ({ nickname }: UpdateNicknameFnVariables) =>
      post<SuccessResponse<UpdateNicknameResponseData>>('/user', { nickname }),
    onSuccess: () => {
      toast({ message: 'CHANGE_NICKNAME_SUCCESS' });
      router.push('/mypage');
    },
    onError: () => {
      toast({ message: 'CHANGE_NICKNAME_FAIL' });
    },
  });

  const { mutate: deleteUser } = useMutation({
    mutationFn: () => del('/user'),
    onSuccess: () => {
      deleteCookie(IS_LOGIN);
      toast({ message: 'DELETE_USER_SUCCESS' });
      router.replace('/');
      router.refresh();
    },
    onError: () => {
      toast({ message: 'DELETE_USER_FAIL' });
    },
  });

  return { kakaoLogin, logout, updateNickname, deleteUser };
};

export default useAuth;
