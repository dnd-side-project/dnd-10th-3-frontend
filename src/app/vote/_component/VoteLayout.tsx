import type { PropsWithChildren, ReactNode } from 'react';

interface VoteLayoutProps {
  header: ReactNode;
  contents: ReactNode;
  footer: ReactNode;
}

const VoteLayout = ({ header, contents, footer }: PropsWithChildren<VoteLayoutProps>) => {
  return (
    <main className="relative flex size-full min-h-screen flex-col pb-10">
      {header}
      <div className="flex w-full flex-1">{contents}</div>
      <div className="sticky bottom-5xl z-20 flex flex-col items-end pr-3xs">{footer}</div>
    </main>
  );
};

export default VoteLayout;
