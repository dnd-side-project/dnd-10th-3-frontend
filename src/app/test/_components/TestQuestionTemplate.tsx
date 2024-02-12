import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { ProgressBar } from '@/components/common/progressBar';
import { Typography } from '@/foundations/typography';
import { TestFormValue } from '@/types/test';

import FormLayout from './FormLayout';

type Props = {
  onChangeStep: () => void;
  progress: number;
  badgeStatus: string;
  question: ReactNode;
  image: string | StaticImport;
  answerList: AnswerButtonType[];
  registerTitle: keyof TestFormValue;
  onPrevStep?: () => void;
};

type AnswerButtonType = {
  id: number;
  answer: string;
};

const TestQuestionTemplate = ({
  answerList,
  badgeStatus,
  image,
  question,
  progress,
  onChangeStep,
  onPrevStep,
}: Props) => {
  return (
    <main className={'relative flex h-dvh w-full flex-col items-center  px-4 pb-10'}>
      <FormLayout
        header={
          <>
            <div className="w-fit" onClick={onPrevStep} role="presentation">
              <Icon icon="chevronLeft" color="black" size={24} />
            </div>
            <ProgressBar currentProgress={progress} className="pt-3xs" />
          </>
        }
        comment={
          <div className="flex flex-col gap-4xs">
            <div className="flex w-2xl items-center justify-center rounded-2xl bg-primary-200 py-6xs">
              {/* TODO : Tag 디자인 시스템 추가 요망 */}
              <span className="text-primary-600">{badgeStatus}</span>
            </div>
            {/* TODO : Typography 디자인 시스템 추가 요망 */}
            <Typography type={'heading2'}>{question}</Typography>
          </div>
        }
        body={
          <div className="absolute right-0">
            <Image src={image} width={215} height={215} alt="testImage" />
          </div>
        }
        footer={
          <div className=" flex flex-col gap-3xs">
            {answerList.map(({ answer, id }) => {
              //HERE : Button에 register 매소드를 연결할 수 없어 하위에 Input 엘리먼트를 추가하였습니다.
              return (
                <Button
                  variant={'secondary'}
                  width="full"
                  onClick={onChangeStep}
                  key={id}
                  className="h-md"
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
