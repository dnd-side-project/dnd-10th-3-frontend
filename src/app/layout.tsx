import type { Metadata } from 'next';

import Providers from '@/contexts/Providers';

import { pretendard } from './fonts';
import './globals.css';

// TODO: 메타 데이터 수정
export const metadata: Metadata = {
  title: 'dnd-10th-3-frontend',
  description: 'dnd-10th-3-frontend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>
        <Providers>
          <div className="layout font-pretendard">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
