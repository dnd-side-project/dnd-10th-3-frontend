import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { META } from '@/constants/metadata';

import KakaoScript from './_components/KakaoScript';

export const metadata: Metadata = META;

const TestResultPage = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <KakaoScript />
    </div>
  );
};

export default TestResultPage;
