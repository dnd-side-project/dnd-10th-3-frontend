import { Tabs } from '@/components/common/tabs';
import { Header } from '@/components/layout/header';

const VoteHeader = () => {
  return (
    <>
      <Header className="z-30 bg-white">
        <Header.Logo />
        <Header.Tab />
        <Header.IconLink href="/my-page" icon="mypage" />
      </Header>

      <div className="sticky top-[68px] z-30 bg-white">
        <Tabs tabItems={['전체', '축의금', '하객룩', '브라이덜 샤워', '기타']} />
      </div>
    </>
  );
};

export default VoteHeader;
