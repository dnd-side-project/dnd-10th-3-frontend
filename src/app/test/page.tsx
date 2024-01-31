import Image from 'next/image';

import LogoImage from '@/assets/images/logo.png';
import WorryImage from '@/assets/images/test-worry.png';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Typography } from '@/foundations/typography';
//TEST : 임시

const Home = () => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center overflow-hidden bg-mainGradient px-4xs">
      <div className="flex w-full items-center justify-between px-3xs pt-2xl 390:pt-sm">
        <div className="">
          <Image src={LogoImage} width={50} height={20} alt="logo" priority />
        </div>
        <div className="h-sm w-6xl bg-gray-400"></div>
        <div>아이콘</div>
      </div>
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
    </div>
  );
};

export default Home;
