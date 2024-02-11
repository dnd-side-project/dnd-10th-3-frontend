'use client';

import Image from 'next/image';
import { useState } from 'react';

import LogoImage from '@/assets/images/logo.png';
import WorryImage from '@/assets/images/test-worry.png';
import TestImage from '@/assets/images/testWorry.png';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { ProgressBar } from '@/components/common/progressBar';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

import FormLayout from './_components/FormLayout';

const Home = () => {
  const userName = '상대';
  const [step, setStep] = useState<'사전' | 0>('사전');

  return (
    <>
      {step === '사전' ? (
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
                <Typography type={'body1'} className="text-white" onClick={() => setStep(0)}>
                  테스트하고 축의금 알아보기
                </Typography>
              </Button>
            </div>
          </div>
        </main>
      ) : (
        <main className={'relative flex h-dvh w-full flex-col items-center  px-4 pb-10'}>
          <FormLayout
            header={
              <>
                <Header>
                  <Header.Previous />
                </Header>
                <ProgressBar currentProgress={10} className="pt-3xs" />
              </>
            }
            comment={
              <div className="flex flex-col gap-4xs">
                <div className="flex w-2xl items-center justify-center rounded-2xl bg-primary-200 py-6xs">
                  {/* TODO : Tag 디자인 시스템 추가 요망 */}
                  <span className="text-primary-600">1/10</span>
                </div>
                {/* TODO : Typography 디자인 시스템 추가 요망 */}
                <Typography type={'heading2'}>
                  나는 {userName}에게 <br /> 마지막 남은 닭다리 하나를 <br />
                  나눠줄 수 있다.
                </Typography>
              </div>
            }
            body={
              <div className="absolute right-0">
                <Image src={TestImage} width={215} height={215} alt="testImage" />
              </div>
            }
            footer={
              <div className=" flex flex-col gap-3xs">
                <Button variant={'primary'} width="full" onClick={() => setStep('사전')}>
                  예
                </Button>
                <Button variant={'secondary'} width="full" onClick={() => setStep('사전')}>
                  아니오
                </Button>
              </div>
            }
          />
        </main>
      )}
    </>
  );
};

export default Home;
