import FirstResultType from '@/assets/images/result/firstResultType.svg';
import ForthResultType from '@/assets/images/result/forthResultType.svg';
import SecondResultType from '@/assets/images/result/secondResultType.svg';
import ThirdResultType from '@/assets/images/result/thirdResultType.svg';
import { TestResultFormType } from '@/types/test';

export const resultTypeMap: Record<TestResultFormType['temperature'], React.ReactNode> = {
  0: <FirstResultType />,
  36: <SecondResultType />,
  70: <ThirdResultType />,
  100: <ForthResultType />,
};
