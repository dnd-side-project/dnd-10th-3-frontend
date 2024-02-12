'use client';

import Image from 'next/image';
import { useState } from 'react';

import LogoImage from '@/assets/images/logo.png';
import { default as WorryImage } from '@/assets/images/test-worry.png';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

import TestQuestion from './_components/TestQuestion';

export type StepProps = '홈' | '사전질문1' | '사전질문2' | '본질문1' | '본질문10';
const Home = () => {
  const userName = '상대';
  const [step, setStep] = useState<StepProps>('홈');

  return (
    <>
      {step === '홈' && (
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
                <Typography
                  type={'body1'}
                  className="text-white"
                  onClick={() => setStep('사전질문1')}
                >
                  테스트하고 축의금 알아보기
                </Typography>
              </Button>
            </div>
          </div>
        </main>
      )}

      {step === '사전질문1' && (
        <TestQuestion
          question={
            <>
              보다 정확한 답변을 드리기 위해
              <br /> 성별을 선택해주세요.
            </>
          }
          image={`/images/testWorry.png`}
          badgeStatus={'사전'}
          progress={0}
          onChangeStep={() => setStep('사전질문2')}
          answerList={[
            { id: 1, answer: '남성' },
            { id: 2, answer: '여성' },
          ]}
        />
      )}

      {step === '사전질문2' && (
        <TestQuestion
          question={
            <>
              사전 질문 마지막 단계예요. <br />
              나이를 선택해주세요.
            </>
          }
          image={`/images/testWorry.png`}
          badgeStatus={'사전'}
          progress={0}
          onChangeStep={() => setStep('본질문1')}
          answerList={[
            { id: 1, answer: '10대' },
            { id: 2, answer: '20대' },
            { id: 3, answer: '30대' },
            { id: 4, answer: '40대' },
          ]}
        />
      )}

      {step === '본질문1' && (
        <TestQuestion
          question={
            <>
              나는 {userName}에게 <br /> 마지막 남은 닭다리 하나를 <br />
              나눠줄 수 있다.
            </>
          }
          image={`/images/testWorry.png`}
          badgeStatus={'1/10'}
          progress={10}
          onChangeStep={() => setStep('본질문10')}
          answerList={[
            { id: 1, answer: '예' },
            { id: 2, answer: '아니오' },
          ]}
        />
      )}

      {step === '본질문10' && (
        <TestQuestion
          question={
            <>
              {userName}가 와서 <br /> 축사를 하기로 약속했다.
              <br />
              이때 나는?
            </>
          }
          image={`/images/testWorry.png`}
          badgeStatus={'10/10'}
          progress={100}
          onChangeStep={() => setStep('홈')}
          answerList={[
            { id: 1, answer: '어떻게 쓸 지 고민되지만 연락줘서 고맙다.' },
            { id: 2, answer: '쓸 말이 없어 막막하고 스트레스 받는다.' },
          ]}
        />
      )}
    </>
  );
};

export default Home;
