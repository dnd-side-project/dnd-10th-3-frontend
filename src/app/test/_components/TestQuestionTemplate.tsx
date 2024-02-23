'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { ProgressBar } from '@/components/common/progressBar';
import { Tag } from '@/components/common/tag';
import { PRE_QUESTIONS_LENGTH, PROGRESS_RATE } from '@/constants/test/progress';
import { Typography } from '@/foundations/typography';
import { TestFormType } from '@/types/test';

import FormLayout from './FormLayout';

type Props = {
  id: number;
  buddy: TestFormType['buddy'];
  onChangeStep: () => void;
  progress: number;
  badgeStatus: string;
  question: (user?: string) => ReactNode;
  image?: string | StaticImport;
  answerList: string[];
  onPrevStep?: () => void;
  onDispatchEvent: (value: string) => void;
};

const TestQuestionTemplate = ({
  buddy,
  id,
  answerList,
  badgeStatus,
  image,
  question,
  progress,
  onChangeStep,
  onPrevStep,
  onDispatchEvent,
}: Props) => {
  return (
    <main className={'relative flex h-dvh w-full flex-col items-center pb-5'}>
      <FormLayout
        header={
          <>
            <div className="w-fit" onClick={onPrevStep} role="presentation">
              <Icon icon="chevronLeft" color="gray-1000" size={24} />
            </div>
            <ProgressBar progress={progress} className="mt-3xs" progressRate={PROGRESS_RATE} />
          </>
        }
        comment={
          <div className="flex flex-col gap-4xs">
            <Tag>{badgeStatus}</Tag>
            <Typography type="question">{question(buddy)}</Typography>
          </div>
        }
        body={
          <>
            {image && (
              <div className="absolute right-0">
                <Image src={image} width={215} height={215} alt="testImage" />
              </div>
            )}
          </>
        }
        footer={
          <div className=" flex flex-col gap-3xs">
            {answerList.map((answer, index) => {
              return (
                <Button
                  variant="accent"
                  width="full"
                  onClick={() => {
                    if (id <= PRE_QUESTIONS_LENGTH) {
                      onChangeStep();
                      onDispatchEvent(answer);

                      //긍정 답변일 경우 trust,love,talk + 1 증가
                    } else if (index === 0) {
                      onChangeStep();
                      onDispatchEvent(answer);
                    } else {
                      onChangeStep();
                    }
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
    </main>
  );
};

export default TestQuestionTemplate;
