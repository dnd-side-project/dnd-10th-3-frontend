'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import useAuth from '@/hooks/api/auth/useAuth';

const KakaoLogin = () => {
  const searchParams = useSearchParams();
  const authorizeCode = searchParams.get('code') ?? '';
  const callbackUrl = decodeURIComponent(searchParams.get('state') ?? '/');

  const { kakaoLogin } = useAuth();

  useEffect(() => {
    kakaoLogin({ authorizeCode, callbackUrl });
  }, [authorizeCode, callbackUrl, kakaoLogin]);

  // TODO 로딩 화면
  return <div>로그인 중...</div>;
};

export default KakaoLogin;
