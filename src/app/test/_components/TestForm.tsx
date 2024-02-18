'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useReducer, useState } from 'react';

import { initialState, reducer } from '@/app/test/_helper/reducer';
import LogoImage from '@/assets/images/logo.png';
import { default as WorryImage } from '@/assets/images/test-worry.png';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Header } from '@/components/layout/header';
import { PRE_QUESTIONS_LENGTH, QUESTIONS_ORDERS_LENGTH } from '@/constants/test/progress';
import { QUESTIONS, QUESTIONS_ORDERS } from '@/constants/test/step';
import { Typography } from '@/foundations/typography';
import { Range } from '@/types/util';

import TestQuestionTemplate from './TestQuestionTemplate';

export type StepProps = Range<0, 12>;

const TestForm = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState<StepProps>(0);

  const handleChangeStep = (index: StepProps) => {
    if (index === QUESTIONS_ORDERS.lastPage) router.push('/test/result');
    setStep((index + 2) as StepProps);
  };

  return (
    <>
      {step === QUESTIONS_ORDERS.home && (
        <div className="relative flex size-full h-dvh flex-col items-center bg-mainGradient pb-2xs">
          <Header>
            <Header.Logo />
            <Header.Tab />
            <Header.IconLink href="/mypage" icon="mypage" />
          </Header>

          <main className="flex size-full flex-col items-center px-2xs">
            <div className="flex h-full flex-col items-center justify-evenly">
              <div className="flex flex-col items-center gap-4xs">
                <Image src={LogoImage} width={150} height={91} alt="logo" priority />
                <Typography type="title1">축의금 결정이 너무 어려웠나요?</Typography>
              </div>

              <div className="flex flex-col items-center gap-xs">
                <Image src={WorryImage} width={275} alt="logo" priority />
                <Input
                  type="fit"
                  placeholder=" 상대 이름을 입력해주세요"
                  className="text-center"
                  value={state.buddy}
                  onChange={(e) => dispatch({ type: 'setBuddyName', value: e.target.value })}
                />
              </div>
            </div>
            <Button width="full" onClick={() => setStep(1)}>
              테스트하고 축의금 알아보기
            </Button>
          </main>
        </div>
      )}

      {QUESTIONS.map((question, index) => {
        return (
          <section key={question.id}>
            {step === question.id && (
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
                  `${step - PRE_QUESTIONS_LENGTH}/${QUESTIONS_ORDERS_LENGTH - PRE_QUESTIONS_LENGTH}`
                }
                progress={(step / QUESTIONS_ORDERS_LENGTH) * 100}
                onChangeStep={() => handleChangeStep(index as StepProps)}
                answerList={QUESTIONS[index].answerList}
              />
            )}
          </section>
        );
      })}
    </>
  );
};

export default TestForm;
