import { Header } from '@/components/layout/header';
import PageLayout from '@/components/layout/PageLayout';

const VotePage = () => {
  return (
    <PageLayout>
      <Header>
        <Header.Logo />
        <Header.Tab />
        <Header.IconLink href="/my-page" icon="user" />
      </Header>
    </PageLayout>
  );
};

export default VotePage;
