import Image from 'next/image';

import worry from '@/assets/images/test-worry.png';
import { KakaoLoginButton } from '@/components/AuthButton';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

const LoginPage = () => {
  return (
    <div className="relative flex h-dvh w-full flex-col items-center bg-mainGradient px-4 pb-10">
      <Header>
        <Header.Logo />
        <Header.IconLink href="/my-page" icon="user" />
      </Header>

      <div className="mt-16 flex flex-col items-center gap-1">
        <Typography type="body2">3초만에 로그인하고</Typography>
        <Typography type="title1">투표 결과 알아봐요</Typography>
      </div>

      <Image src={worry} width={274} height={197} alt="logo" priority className="my-auto" />

      <KakaoLoginButton />
    </div>
  );
};

export default LoginPage;
