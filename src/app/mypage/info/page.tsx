import { Header } from '@/components/layout/header';

import { NicknameForm } from './_components';

const page = () => {
  return (
    <>
      <Header className="bg-white">
        <Header.Previous />
        <Header.Text text="내 정보" />
        <Header.IconLink icon="settings" href="/mypage/settings" iconColor="gray-1000" />
      </Header>

      <main className="flex size-full flex-col px-2xs">
        <NicknameForm />
      </main>
    </>
  );
};

export default page;
