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
import { ALL_QUESTIONS, MAIN_QUESTIONS } from '@/constants/test/step';
import { TestContext } from '@/contexts/test/TestProvider';
import { useFunnelContext } from '@/contexts/test/useFunnelContext';

import TestTemplate from './TestTemplate';

type TestProps = {
  step: string;
};

const TestStep = ({ step }: TestProps) => {
  const { toNext, toPrev } = useFunnelContext();
  const testState = useContext(TestContext);
  const isPreQuestion = step.slice(0, 2) === '사전';
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
              : `${MAIN_QUESTIONS[step].id}/${ALL_QUESTIONS_LENGTH - PRE_QUESTIONS_LENGTH}`}
          </Tag>
          <Typography type="question">{ALL_QUESTIONS[step].question('상대')}</Typography>
        </div>
      }
      body={
        <>
          {ALL_QUESTIONS[step].image ? (
            <div className="absolute right-0">
              <Image
                src={ALL_QUESTIONS[step].image as string}
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
          {ALL_QUESTIONS[step].answerList.map((answer, index) => {
            return (
              <Button
                variant="accent"
                width="full"
                onClick={() => {
                  if (isPreQuestion) {
                    toNext();
                    testState?.dispatch({ type: `${ALL_QUESTIONS[step].type}`, value: answer });
                  }
                  if (index === 0) {
                    // FIXME : typeError value : '' 임시 해결 ('{ type: "trust" | "love" | "talk" | "setBuddyName" | "setGender" | "setAge"; }' 형식의 인수는 'TestAction' 형식의 매개 변수에 할당될 수 없습니다.)
                    testState?.dispatch({ type: `${ALL_QUESTIONS[step].type}`, value: '' });
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
