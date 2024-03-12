import { josa } from '@toss/hangul';
import dayjs from 'dayjs';
import { PropsWithChildren } from 'react';

import { Result0, Result100, Result36, Result70 } from '@/assets/images/result';
import { Typography } from '@/components/common/typography';
import { TestResultFormType } from '@/types/test';

type Props = { result: TestResultFormType };

const resultTypeImage = {
  0: Result0,
  36: Result36,
  70: Result70,
  100: Result100,
};

const ResultCard = ({ result }: Props) => {
  const ResultTypeImage = resultTypeImage[result.temperature];

  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-primary-100 p-5xs">
      <ResultTypeImage />
      <Typography type="title2" className="mt-5xs flex items-center justify-center">
        나와
        <span className="inline-block w-20 max-w-fit truncate">
          {'\b'}
          {result.buddy}
        </span>
        {josa(result.buddy, '은/는').slice(-1)}
      </Typography>
      <Typography type="title2" className="text-primary-800">
        {result.temperature}℃
      </Typography>
      <Typography type="body3" className="mt-5xs font-light text-gray-400">
        {dayjs(+result.createdAt).format('YYYY-MM-DD')}
      </Typography>
    </div>
  );
};

export const ResultCardContainer = ({ children }: PropsWithChildren) => {
  return <div className="mt-xs grid grid-cols-2 gap-3xs">{children}</div>;
};

export default ResultCard;
