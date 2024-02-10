import type { PropsWithChildren, ReactNode } from 'react';

interface VoteLayoutProps {
  header: ReactNode;
  contents: ReactNode;
  footer: ReactNode;
}

const VoteLayout = ({ header, contents, footer }: PropsWithChildren<VoteLayoutProps>) => {
  return (
    <main className="relative flex size-full min-h-screen flex-col px-4 pb-10">
      {header}
      <div className="flex flex-1 flex-col items-center justify-center">{contents}</div>
      {footer}
    </main>
  );
};

export default VoteLayout;
