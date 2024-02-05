import { PropsWithChildren } from 'react';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex h-dvh w-full flex-col items-center px-4 pb-10">{children}</main>
  );
};

export default PageLayout;
