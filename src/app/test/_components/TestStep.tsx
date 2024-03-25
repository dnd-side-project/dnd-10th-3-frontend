import Image from 'next/image';
import { useContext } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { ProgressBar } from '@/components/common/progressBar';
import { Tag } from '@/components/common/tag';
import { Typography } from '@/components/common/typography';
import {
  ALL_QUESTIONS_LENGTH,
  PRE_QUESTIONS_LENGTH,
  PROGRESS_RATE,
} from '@/constants/test/progress';
import { ALL_QUESTIONS, FUNNEL_LIST, MAIN_QUESTIONS } from '@/constants/test/step';
import { TestContext } from '@/contexts/test/TestProvider';
import { useFunnelContext } from '@/contexts/test/useFunnelContext';

import TestTemplate from './TestTemplate';

type TestProps = {
  currentStep: string;
};

const TestStep = ({ currentStep }: TestProps) => {
  const { toNext, toPrev } = useFunnelContext();
  const testState = useContext(TestContext);
  const isPreQuestion = currentStep.slice(0, 2) === '사전';
  const isLastQuestion = currentStep === FUNNEL_LIST[FUNNEL_LIST.length - 1];

  return (
    <TestTemplate
      header={
        <>
          <div className="w-fit" onClick={toPrev} role="presentation">
            <Icon icon="chevronLeft" color="gray-1000" size={20} />
          </div>
          <ProgressBar progress={10} className="mt-3xs" progressRate={PROGRESS_RATE} />
        </>
      }
      comment={
        <div className="flex flex-col gap-4xs">
          <Tag>
            {isPreQuestion
              ? 'Q.사전질문'
              : `${MAIN_QUESTIONS[currentStep].id}/${ALL_QUESTIONS_LENGTH - PRE_QUESTIONS_LENGTH}`}
          </Tag>
          <Typography type="question">
            {ALL_QUESTIONS[currentStep].question(isPreQuestion ? '' : testState?.state.buddy)}
          </Typography>
        </div>
      }
      body={
        <>
          {ALL_QUESTIONS[currentStep].image ? (
            <div className="absolute right-0">
              <Image
                src={ALL_QUESTIONS[currentStep].image as string}
                width={215}
                height={215}
                alt="testImage"
              />
            </div>
          ) : null}
        </>
      }
      footer={
        <div className=" flex flex-col gap-3xs">
          {ALL_QUESTIONS[currentStep].answerList.map((answer, index) => {
            return (
              <Button
                variant="accent"
                width="full"
                onClick={() => {
                  if (isPreQuestion) {
                    toNext();
                    testState?.dispatch({
                      type: `${ALL_QUESTIONS[currentStep].type}`,
                      value: answer,
                    });
                    return;
                  }

                  if (isLastQuestion) {
                    console.log('제출');
                    //
                  }

                  // 사전 질문을 제외하고 첫번째 버튼을 클릭할 경우 reducer 상태를 변경하도록 구현
                  if (index === 0) {
                    // FIXME : typeError value : '' 임시 해결 ('{ type: "trust" | "love" | "talk" | "setBuddyName" | "setGender" | "setAge"; }' 형식의 인수는 'TestAction' 형식의 매개 변수에 할당될 수 없습니다.)
                    testState?.dispatch({
                      type: `${ALL_QUESTIONS[currentStep].type}`,
                      value: '',
                    });
                  }
                  toNext();
                }}
                key={index}
                className="h-md bg-primary-700 text-white"
              >
                {answer}
              </Button>
            );
          })}
        </div>
      }
    />
  );
};

export default TestStep;
