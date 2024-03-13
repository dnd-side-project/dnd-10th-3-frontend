import { useMutation } from '@tanstack/react-query';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { donworryApi } from '@/api';
import { IS_LOGIN } from '@/constants/auth';
import { useToast } from '@/hooks';

const useAuth = () => {
  const router = useRouter();
  const toast = useToast();

  const kakaoLogin = useCallback(
    async (authorizeCode: string, callbackUrl: string) => {
      try {
        donworryApi.auth.kakaoLogin({ authorizeCode });
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
    mutationFn: donworryApi.auth.logOut,
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

  const { mutate: deleteUser } = useMutation({
    mutationFn: donworryApi.auth.withdraw,
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

  return { kakaoLogin, logout, deleteUser };
};

export default useAuth;
