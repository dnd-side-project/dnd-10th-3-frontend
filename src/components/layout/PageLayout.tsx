import { ReactNode } from 'react';

import { cn } from '@/lib/core';

type Props = {
  children: ReactNode;
  className?: string;
};

const PageLayout = ({ children, className }: Props) => {
  return (
    <main className={cn('relative flex h-dvh w-full flex-col px-4', className)}>{children}</main>
  );
};

export default PageLayout;
