'use client';

import { Button } from '@/components/common/button';

const KakaoLoginButton = () => {
  return (
    <Button
      icon="kakaotalk"
      width="full"
      iconColor="gray-1000"
      className="rounded-lg bg-auth-kakao px-[14px] text-gray-600"
    >
      <span className="grow">카카오로 시작하기</span>
    </Button>
  );
};

export default KakaoLoginButton;
