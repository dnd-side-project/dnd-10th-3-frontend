import Image from 'next/image';

import LogoImage from '@/assets/images/logo.png';
import WorryImage from '@/assets/images/test-worry.png';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

//TEST : 임시

const Home = () => {
  return (
    <main className={'relative flex h-dvh w-full flex-col items-center bg-mainGradient px-4'}>
      {/* TODO : 아이폰 크기일 경우 INPUT이 화면에서 짤리는 상황, 추후 디자인 수정 이후 변경 필수 */}
      <Header>
        <Header.Logo />
        <Header.Tab />
        <Header.IconLink href="/my-page" icon="user" />
      </Header>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-[24px] py-xl 390:h-[200px] 390:py-xs">
        <Image src={LogoImage} width={150} height={91} alt="logo" priority />
        <Typography type={'heading2'} className="text-gray-500">
          축의금 결정이 너무 어려웠나요?
        </Typography>
      </div>

      <div className="flex w-[110%] justify-center py-xs  390:py-4xs">
        <Image src={WorryImage} width={275} alt="logo" priority />
      </div>
      <div className="flex w-[80%] justify-center px-5xs py-3xs">
        <Input type="fit" placeholder=" 상대 이름을 입력해주세요" className="text-center" />
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="absolute bottom-[10px] flex w-[95%] flex-col px-xs">
          <Button className=" bg-gray-700" width="full">
            <Typography type={'body1'} className="text-white">
              테스트하고 축의금 알아보기
            </Typography>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
