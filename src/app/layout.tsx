import type { Metadata } from 'next';

import Providers from '@/contexts/Providers';

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
      <body>
        <Providers>
          <div className="layout">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
