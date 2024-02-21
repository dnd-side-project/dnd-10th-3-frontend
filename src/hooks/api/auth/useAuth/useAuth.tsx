import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@/hooks';
import { del, get, post } from '@/lib/axios';
import { FailResponse, SuccessResponse } from '@/types/response';

import {
  KakaoLoginFnVariables,
  KakaoLoginResponseData,
  UpdateNicknameFnVariables,
  UpdateNicknameResponseData,
} from './types';

const useAuth = () => {
  const router = useRouter();
  const toast = useToast();

  const kakaoLogin = async ({ authorizeCode, callbackUrl }: KakaoLoginFnVariables) => {
    try {
      await get<SuccessResponse<KakaoLoginResponseData>>(
        `/login/oauth2/code/kakao?code=${authorizeCode}`,
        { baseURL: 'https://donworry.online' },
      );
      toast({ message: 'LOGIN_SUCCESS' });
      router.push(decodeURIComponent(callbackUrl));
    } catch (error) {
      toast({ message: 'LOGIN_FAIL' });
      router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  };

  const { mutate: logout } = useMutation({
    mutationFn: () => post('/user/logout'),
    onSuccess: () => {
      toast({ message: 'LOGOUT_SUCCESS' });
      router.push('/');
    },
    onError: () => {
      toast({ message: 'LOGOUT_FAIL' });
    },
  });

  const { mutate: updateNickname } = useMutation<
    SuccessResponse<UpdateNicknameResponseData>,
    FailResponse,
    UpdateNicknameFnVariables
  >({
    mutationFn: ({ nickname }) => post('/user', { nickname }),
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
      toast({ message: 'DELETE_USER_SUCCESS' });
      router.push('/');
    },
    onError: () => {
      toast({ message: 'DELETE_USER_FAIL' });
    },
  });

  return { kakaoLogin, logout, updateNickname, deleteUser };
};

export default useAuth;
