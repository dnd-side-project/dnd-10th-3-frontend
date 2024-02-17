import Link from 'next/link';

import { Divider } from '@/components/common/divider';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

const page = () => {
  return (
    <>
      <Header className="bg-white">
        <Header.Previous />
        <Header.Text text="설정" />
        <Header.Text text="" />
      </Header>

      <main className="flex size-full flex-col gap-lg px-2xs">
        <div className="mt-2xs flex flex-col">
          <Typography type="title3">기타</Typography>

          <Link href="TODO" className="py-3xs">
            서비스 피드백 보내기
          </Link>
          <Divider />
          <Link href="TODO" className="py-3xs">
            개인정보 처리방침
          </Link>
          <Divider />
        </div>

        <div className="flex flex-col">
          <Typography type="title3">계정 설정</Typography>

          <button className="w-full py-3xs text-start">로그아웃</button>
          <Divider />
          <button className="w-full py-3xs text-start">회원 탈퇴</button>
          <Divider />
        </div>
      </main>
    </>
  );
};

export default page;
