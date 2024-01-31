import Image from 'next/image';

import LogoImage from '@/assets/images/logo.png';
import WorryImage from '@/assets/images/test-worry.png';
import { Button } from '@/components/common/button';
import { Typography } from '@/components/common/typography';

const Home = () => {
  return (
    <div className="bg- relative flex h-[100dvh] w-full flex-col items-center overflow-hidden bg-red-20 px-4xs">
      <div className="flex w-full items-center justify-between px-3xs pt-2xl">
        <div className="">
          <Image src={LogoImage} width={50} height={20} alt="logo" priority />
        </div>
        <div className="bg-gray-40 h-sm w-6xl"></div>
        <div>아이콘</div>
      </div>
      <div className="z-10 flex h-[300px] flex-col items-center justify-center gap-[24px] py-xl">
        <Image src={LogoImage} width={150} height={91} alt="logo" priority />
        <Typography type={'heading2'}>축의금 결정이 너무 어려웠나요?</Typography>
      </div>

      <div className="py-xs">
        <Image src={WorryImage} width={275} alt="logo" priority />
      </div>
      <div className="flex w-full justify-center px-5xs py-3xs">
        <Button className="bg-gray-20 w-3/4" width="full">
          <Typography type={'body1'} className="text-gray-40">
            상대 이름을 입력해주세요
          </Typography>
        </Button>
      </div>
      <div className="flex h-[80vh] w-full flex-col items-center">
        <div className="absolute bottom-[10px] flex w-full flex-col gap-3xs px-xs pb-[25px]">
          <Button className="bg-gray-30" width="full">
            <Typography type={'body1'}>테스트하고 축의금 알아보기</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
