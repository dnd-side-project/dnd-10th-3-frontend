import { Fallback } from '@/components/layout/fallback';
import { KAKAO_LOGIN_URL } from '@/constants/auth';

import { ErrorHandler } from './types';

const UnauthorizedErrorHandler: ErrorHandler = ({}) => {
  // TODO 여기서 useEffect를 통해 에러 로깅

  return (
    <Fallback
      title="로그인이 만료되었어요"
      description={`로그인이 만료되어 재로그인이 필요해요.\n다시 로그인해 주세요.`}
      buttonText="다시 로그인하기"
      buttonClickHandler={() => {
        window.location.href = KAKAO_LOGIN_URL + `&state=${window.location.href}`;
      }}
    />
  );
};

export default UnauthorizedErrorHandler;
