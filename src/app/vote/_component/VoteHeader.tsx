import { Suspense } from 'react';

import { Tabs } from '@/components/common/tabs';
import { Header } from '@/components/layout/header';
import { CATEGORY_TAB } from '@/constants/category';

const VoteHeader = () => {
  return (
    <>
      <Header className="z-30 bg-white">
        <Header.Logo />
        <Header.ToggleNav />
        <Header.IconLink href="/mypage" icon="mypage" />
      </Header>

      <div className="sticky top-[68px] z-30 bg-white">
        <Suspense>
          <Tabs tabItems={CATEGORY_TAB} />
        </Suspense>
      </div>
    </>
  );
};

export default VoteHeader;
