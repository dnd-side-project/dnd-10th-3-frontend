import { Button } from '@/components/common/button';
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
        {/* searchInput 구현하여 수정해야한다*/}
        <div className="py-4xs">
          <Input placeholder="무엇이 고민이신가요?" />
        </div>
      </div>

      {/* FloatButton*/}
      <div className="absolute bottom-5xl right-xs">
        <Button
          icon="add"
          iconOnly
          className="h-[56px] w-xl rounded-[100%] bg-primary-500"
          iconColor="white"
        />
      </div>
    </PageLayout>
  );
};

export default VotePage;
