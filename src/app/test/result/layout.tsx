import { PropsWithChildren } from 'react';

import KakaoScript from './_components/KakaoScript';

const TestResultPage = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <KakaoScript />
    </div>
  );
};

export default TestResultPage;
