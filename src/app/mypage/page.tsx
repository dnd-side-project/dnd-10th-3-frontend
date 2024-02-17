import { Tabs } from '@/components/common/tabs';
import { Header } from '@/components/layout/header';
import { MYPAGE_TAB } from '@/constants/category';

import { MyTest, MyVote, Profile } from './_components';

const page = ({
  searchParams,
}: {
  searchParams: { tab: (typeof MYPAGE_TAB)[number]['params'] };
}) => {
  const currentTab = searchParams.tab ?? MYPAGE_TAB[0].params;

  return (
    <>
      <Header className="bg-white">
        <Header.Previous />
        <Header.Text text="마이페이지" />
        <Header.IconLink icon="settings" href="/mypage/settings" iconColor="gray-1000" />
      </Header>

      <Profile />
      <Tabs tabItems={MYPAGE_TAB} />
      <main className="flex size-full flex-col px-2xs">
        {currentTab === 'vote' ? <MyVote /> : <MyTest />}
      </main>
    </>
  );
};

export default page;
