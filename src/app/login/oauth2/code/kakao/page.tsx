import { Suspense } from 'react';

import KakaoLogin from './_components/KakaoLogin';

const page = () => {
  return (
    <Suspense>
      <KakaoLogin />
    </Suspense>
  );
};

export default page;
