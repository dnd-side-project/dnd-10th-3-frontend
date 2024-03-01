import { Fallback } from '@/components/layout/fallback';

import { ErrorHandler } from './types';

const ApiErrorHandler: ErrorHandler = ({ reset }) => {
  // TODO 여기서 useEffect를 통해 에러 로깅

  return (
    <Fallback
      title="현재 서비스가 원활하지 않아요"
      description="잠시 후 다시 실행해 주세요."
      buttonText="다시 시도하기"
      buttonClickHandler={() => {
        reset();
      }}
    />
  );
};

export default ApiErrorHandler;
