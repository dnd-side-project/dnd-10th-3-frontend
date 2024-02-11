'use client';

import type { PropsWithChildren } from 'react';

import CreateGoalFormProvider from '@/contexts/reactHookForm/CreateGoalFormProvider';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return <CreateGoalFormProvider>{children}</CreateGoalFormProvider>;
};

export default HomeLayout;
