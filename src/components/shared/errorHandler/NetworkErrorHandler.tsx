import { Fallback } from '@/components/layout/fallback';

import { ErrorHandler } from './types';

const NetworkErrorHandler: ErrorHandler = ({ reset }) => {
  // TODO 여기서 useEffect를 통해 에러 로깅

  return (
    <Fallback
      title="연결 상태가 좋지 않아요"
      description={`네트워크 연결 상태를 확인하고\n잠시 후 다시 실행해 주세요.`}
      buttonText="다시 시도하기"
      buttonClickHandler={() => {
        reset();
      }}
    />
  );
};

export default NetworkErrorHandler;
