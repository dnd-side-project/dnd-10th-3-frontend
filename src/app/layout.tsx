import type { Metadata } from 'next';

import { ToastContainer } from '@/components/common/toast';
import { META } from '@/constants/metadata';
import Providers from '@/contexts/Providers';

import { pretendard } from './fonts';

import './globals.css';

// TODO: 메타 데이터 수정
export const metadata: Metadata = META;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`} suppressHydrationWarning={true}>
        <Providers>
          <ToastContainer />
          <div className="layout font-pretendard ">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
