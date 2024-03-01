import Link from 'next/link';

import NotFoundImage from '@/assets/images/404.svg';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

const NotFoundPage = () => {
  return (
    <div className="flex h-dvh flex-col pb-2xs">
      <Header>
        <Header.Previous />
      </Header>

      <main className="flex h-full flex-col px-2xs">
        <div className="flex h-full flex-col items-center justify-center gap-3xs pb-[40%]">
          <NotFoundImage />
          <Typography type="heading2">페이지를 찾을 수 없어요.</Typography>
          <Typography type="body2" className="text-center text-gray-500">
            {'페이지 주소가 사라졌거나 사용할 수 없어요.\n입력하신 주소를 다시 확인해 주세요.'}
          </Typography>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center rounded-lg bg-gray-1000 px-3xs py-4xs text-base font-medium text-white"
        >
          메인으로 돌아가기
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;
