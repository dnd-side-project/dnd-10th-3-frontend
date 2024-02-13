import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { ProgressBar } from '@/components/common/progressBar';
import { Tag } from '@/components/common/tag';
import { Typography } from '@/foundations/typography';

import FormLayout from './FormLayout';

type Props = {
  onChangeStep: () => void;
  progress: number;
  badgeStatus: string;
  question: ReactNode;
  image: string | StaticImport;
  answerList: string[];
  onPrevStep?: () => void;
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
            <Tag>{badgeStatus}</Tag>
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
            {answerList.map((answer, index) => {
              return (
                <Button
                  variant={'secondary'}
                  width="full"
                  onClick={onChangeStep}
                  key={index}
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