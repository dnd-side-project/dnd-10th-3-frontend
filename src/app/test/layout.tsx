'use client';

import type { PropsWithChildren } from 'react';

import CreateGoalFormProvider from '@/contexts/reactHookForm/CreateGoalFormProvider';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <CreateGoalFormProvider>
      <main className="relative flex justify-center">
        <div className="h-[100dvh] w-full">
          <div className="flex h-[100dvh] w-full flex-col items-center justify-between pb-xs">
            {children}
          </div>
        </div>
      </main>
    </CreateGoalFormProvider>
  );
};

export default HomeLayout;
