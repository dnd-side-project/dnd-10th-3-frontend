import { Tabs } from '@/components/common/tabs';
import { Header } from '@/components/layout/header';
import { CATEGORY_TAB } from '@/constants/category';

const VoteHeader = () => {
  return (
    <>
      <Header className="z-30 bg-white">
        <Header.Logo />
        <Header.Tab />
        <Header.IconLink href="/mypage" icon="mypage" />
      </Header>

      <div className="sticky top-[68px] z-30 bg-white">
        <Tabs tabItems={CATEGORY_TAB} />
      </div>
    </>
  );
};

export default VoteHeader;
