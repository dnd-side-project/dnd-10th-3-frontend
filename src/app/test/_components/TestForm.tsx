'use client';

import { useReducer, useState } from 'react';

import { initialState, reducer } from '@/app/test/_helper/reducer';
import MainLogo from '@/assets/images/mainLogo.svg';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Typography } from '@/components/common/typography';
import { Header } from '@/components/layout/header';
import { PRE_QUESTIONS_LENGTH, QUESTIONS_ORDERS_LENGTH } from '@/constants/test/progress';
import { QUESTIONS, QUESTIONS_ORDERS } from '@/constants/test/step';
import { useToast } from '@/hooks';
import { Range } from '@/types/util';

import TestLoading from './TestLoading';
import TestQuestionTemplate from './TestQuestionTemplate';

export type StepProps = Range<0, 12>;
const TestForm = () => {
  const toast = useToast();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState<StepProps>(0);

  const handleChangeStep = (index: StepProps) => {
    setStep((index + 2) as StepProps);
  };

  const handleTestFormInvalid = () => {
    if (!state.buddy) {
      return toast({ message: 'NICKNAME_REQUIRED', above: 'button' });
    }
    setStep(1);
  };

  const handleOnKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTestFormInvalid();
    }
  };

  return (
    // 테스트 시작 랜딩 페이지 다음 PR SSR로 분리 예정
    <>
      {step === QUESTIONS_ORDERS.home && (
        <div className="relative flex size-full h-dvh flex-col items-center bg-mainGradient pb-2xs">
          <Header>
            <Header.Logo />
            <Header.ToggleNav />
            <Header.IconLink href="/mypage" icon="mypage" />
          </Header>

          <main className="flex size-full flex-col items-center">
            <div className="flex flex-col items-center justify-center py-sm">
              <h1 className="text-[32px] font-semibold">축의금 얼마 내지?</h1>
              <div className="h-md  rounded-md border-2 border-primary-700 text-center">
                <div className="flex items-center justify-between gap-2 px-4xs text-[24px] font-bold leading-[145%] text-primary-700">
                  <span>₩</span>
                  <p>??,???</p>
                </div>
              </div>
              <Typography type="title4" className="pt-4xs text-gray-500">
                상대와의 친밀도 알아보고 축의금 결정해보세요
              </Typography>
            </div>
            <section className=" flex w-full flex-1 flex-col items-center">
              <MainLogo width="100%" height="70%" />
              <div className="w-[70%]">
                <Input
                  type="fit"
                  placeholder=" 상대 이름을 입력해주세요"
                  className="text-center placeholder:text-gray-1000"
                  bgcolor="lightGray"
                  value={state.buddy}
                  onChange={(e) => dispatch({ type: 'setBuddyName', value: e.target.value })}
                  onKeyUp={handleOnKeyEnter}
                />
              </div>
            </section>

            <footer className="w-full px-2xs">
              <Button width="full" onClick={handleTestFormInvalid}>
                테스트하고 축의금 알아보기
              </Button>
            </footer>
          </main>
        </div>
      )}

      {QUESTIONS.map((question, index) => {
        return (
          <section key={question.id}>
            {step === question.id && (
              <TestQuestionTemplate
                buddy={state.buddy}
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

      {step === QUESTIONS_ORDERS.loadingPage && <TestLoading state={state} />}
    </>
  );
};

export default TestForm;
