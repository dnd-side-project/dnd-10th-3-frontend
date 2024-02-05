import { Input } from '@/components/common/input';
import { Header } from '@/components/layout/header';
import PageLayout from '@/components/layout/PageLayout';
import { Typography } from '@/foundations/typography';

const VotePage = () => {
  return (
    <PageLayout>
      <Header>
        <Header.Logo />
        <Header.Tab />
        <Header.IconLink href="/my-page" icon="user" />
      </Header>

      {/* <카테고리 탭/> */}
      <div className="p-xs">
        <Typography type={'heading1'}>
          결혼식 참석시 <br /> 고민이었던 부분을 나눠보세요.
        </Typography>
        {/* searchInput을*/}
        <div className="py-4xs">
          <Input placeholder="무엇이 고민이신가요?" />
        </div>
      </div>
    </PageLayout>
  );
};

export default VotePage;
