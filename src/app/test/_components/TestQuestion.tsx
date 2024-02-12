import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { ProgressBar } from '@/components/common/progressBar';
import { Typography } from '@/foundations/typography';

import FormLayout from './FormLayout';

type Props = {
  onChangeStep: () => void;
  progress: number;
  badgeStatus: string;
  question: ReactNode;
  image: string | StaticImport;
  answerList: AnswerButtonType[];
};

type AnswerButtonType = {
  id: number;
  answer: string;
};

const TestQuestion = ({
  answerList,
  badgeStatus,
  image,
  question,
  progress,
  onChangeStep,
}: Props) => {
  return (
    <main className={'relative flex h-dvh w-full flex-col items-center  px-4 pb-10'}>
      <FormLayout
        header={
          <>
            <Icon icon="chevronLeft" color="black" size={24} />
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
            {answerList.map(({ answer, id }) => (
              <Button variant={'secondary'} width="full" onClick={onChangeStep} key={id}>
                {answer}
              </Button>
            ))}
          </div>
        }
      />
    </main>
  );
};

export default TestQuestion;
