import type { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex justify-center">
      <div className="h-[100dvh] w-full">
        <div className="flex h-[100dvh] w-full flex-col items-center justify-between pb-xs">
          {children}
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
