'use client';

import { Button } from '@/components/common/button';

const KakaoLoginButton = () => {
  return (
    <Button
      icon="icon" // TODO kakao icon
      width="full"
      className="gap-0 bg-auth-kakao px-9 text-gray-650"
    >
      카카오로 시작하기
    </Button>
  );
};

export default KakaoLoginButton;
