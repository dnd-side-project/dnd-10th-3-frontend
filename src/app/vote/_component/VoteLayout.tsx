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
      <div className="flex w-full flex-1">{contents}</div>
      <div className="sticky bottom-5xl right-xs z-20 flex flex-col items-end">{footer}</div>
    </main>
  );
};

export default VoteLayout;
