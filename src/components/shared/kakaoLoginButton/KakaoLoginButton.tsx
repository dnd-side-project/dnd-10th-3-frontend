'use client';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { CALLBACK_URL, KAKAO_LOGIN_URL } from '@/constants/auth';

type Props = {
  [CALLBACK_URL]?: string;
};

const KakaoLoginButton = ({ callbackUrl = '/' }: Props) => {
  const navigateToKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL + `&state=${callbackUrl}`;
  };

  return (
    <Button
      width="full"
      Icon={<Icon icon="kakaotalk" color="gray-1000" />}
      className="rounded-lg bg-auth-kakao px-[14px] text-gray-1000"
      onClick={navigateToKakaoLogin}
    >
      <span className="grow">카카오로 시작하기</span>
    </Button>
  );
};

export default KakaoLoginButton;
