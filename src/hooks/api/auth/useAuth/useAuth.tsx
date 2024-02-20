import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@/hooks';
import { get, post } from '@/lib/axios';
import { SuccessResponse } from '@/types/response';

import { KakaoLoginFnVariables, KakaoLoginResponseData } from './types';

const useAuth = () => {
  const router = useRouter();
  const toast = useToast();

  const kakaoLogin = async ({ authorizeCode, callbackUrl }: KakaoLoginFnVariables) => {
    try {
      await get<SuccessResponse<KakaoLoginResponseData>>(
        `/login/oauth2/code/kakao?code=${authorizeCode}`,
        {
          baseURL: 'https://donworry.online',
          withCredentials: true,
        },
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

  return { kakaoLogin, logout };
};

export default useAuth;
