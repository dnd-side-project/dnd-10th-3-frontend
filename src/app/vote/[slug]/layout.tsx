import { Header } from '@/components/layout/header';

const VoteDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex size-full h-dvh flex-col">
      <Header className="bg-white">
        <Header.Previous />
      </Header>
      <main className="flex size-full flex-col">{children}</main>
    </div>
  );
};

export default VoteDetailLayout;
