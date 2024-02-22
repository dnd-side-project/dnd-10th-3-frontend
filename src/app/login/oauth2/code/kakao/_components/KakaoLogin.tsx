'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Spinner } from '@/components/common/spinner';
import { useAuth } from '@/hooks/api/auth';

const KakaoLogin = () => {
  const searchParams = useSearchParams();
  const authorizeCode = searchParams.get('code') ?? '';
  const callbackUrl = decodeURIComponent(searchParams.get('state') ?? '/');

  const { kakaoLogin } = useAuth();

  useEffect(() => {
    kakaoLogin({ authorizeCode, callbackUrl });
  }, [authorizeCode, callbackUrl, kakaoLogin]);

  return (
    <div className="flex h-dvh items-center justify-center">
      <Spinner />
    </div>
  );
};

export default KakaoLogin;
