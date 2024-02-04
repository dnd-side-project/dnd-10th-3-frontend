'use client';

import { Button } from '@/components/common/button';

const KakaoLoginButton = () => {
  return (
    <Button
      icon="kakaotalk"
      width="full"
      iconColor="black"
      className="bg-auth-kakao px-md text-gray-600"
    >
      <span className="grow">카카오로 시작하기</span>
    </Button>
  );
};

export default KakaoLoginButton;
