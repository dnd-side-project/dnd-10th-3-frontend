/**
 * HERE: - TestQuestionTemplate 컴포넌트를 만들어 정적 데이터를 주입 받도록 구현하였습니다. 다만 기능 구현을 위해 빠르게 구현한 부분이라
 * 더 간결한 방법이 있는지 궁금합니다. 사소한 부분이라도 알려주시면 바로 수정하겠습니다! 감사합니다.
 */

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useReducer, useState } from 'react';

import LogoImage from '@/assets/images/logo.png';
import { default as WorryImage } from '@/assets/images/test-worry.png';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Header } from '@/components/layout/header';
import { PRE_QUESTIONS_LENGTH, QUESTIONS_ORDERS_LENGTH } from '@/constants/test/progress';
import { QUESTIONS, QUESTIONS_ORDERS } from '@/constants/test/step';
import { Typography } from '@/foundations/typography';
import { Range } from '@/types/util';

import { Step, TestQuestionTemplate } from './_components';
import { initialState, reducer } from './_helper/reducer';

export type StepProps = Range<0, 12>;

const Home = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState<StepProps>(0);

  const handleChangeStep = (index: StepProps) => {
    if (index === QUESTIONS_ORDERS.lastPage) router.push('/test/result');
    setStep((index + 2) as StepProps);
  };

  const totalPages = QUESTIONS_ORDERS_LENGTH;

  return (
    <>
      <Step check={step === QUESTIONS_ORDERS.home}>
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
            <Input
              type="fit"
              placeholder=" 상대 이름을 입력해주세요"
              className="text-center"
              value={state.buddy}
              onChange={(e) => dispatch({ type: 'setBuddyName', value: e.target.value })}
            />
          </div>
          <div className="flex w-full flex-col items-center">
            <div className="absolute bottom-[20px] flex w-[95%] flex-col px-xs">
              <Button className=" bg-gray-700" width="full">
                <Typography type={'body1'} className="text-white" onClick={() => setStep(1)}>
                  테스트하고 축의금 알아보기
                </Typography>
              </Button>
            </div>
          </div>
        </main>
      </Step>

      {QUESTIONS.map((question, index) => {
        return (
          <Step check={step === question.id} key={question.id}>
            <TestQuestionTemplate
              id={question.id}
              onDispatchEvent={(buttonValue) =>
                dispatch({ type: `${QUESTIONS[index].type}`, value: buttonValue })
              }
              onPrevStep={() => setStep((prev) => (prev - 1) as StepProps)}
              question={QUESTIONS[index].question}
              image={QUESTIONS[index].image}
              badgeStatus={
                QUESTIONS[index].badgeStatus ||
                `${QUESTIONS[index].progress - PRE_QUESTIONS_LENGTH}/${totalPages - PRE_QUESTIONS_LENGTH}`
              }
              progress={(QUESTIONS[index].progress / totalPages) * 100}
              onChangeStep={() => handleChangeStep(index as StepProps)}
              answerList={QUESTIONS[index].answerList}
            />
          </Step>
        );
      })}
    </>
  );
};

export default Home;
