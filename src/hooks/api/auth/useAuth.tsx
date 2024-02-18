'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { post } from '@/lib/axios';

type KakaoLoginFnVariables = {
  authorizeCode: string;
  callbackUrl: string;
};

// TODO API 명세서 나오면 작성
type Response = unknown;
type Error = unknown;

const useAuth = () => {
  const router = useRouter();

  const { mutate: kakaoLogin } = useMutation<Response, Error, KakaoLoginFnVariables>({
    mutationFn: ({ authorizeCode }) => post('/login/oauth2/code/kakao', { code: authorizeCode }),
    onSuccess: (_, { callbackUrl }) => {
      router.push(decodeURIComponent(callbackUrl));
    },
    onError: () => {
      // TODO
    },
  });

  const { mutate: logout } = useMutation({
    mutationFn: () => post('/logout'),
    onSuccess: () => {
      router.push('/');
    },
    onError: () => {
      // TODO
    },
  });

  return { kakaoLogin, logout };
};

export default useAuth;
