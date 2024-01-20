'use client';

import type { QueryClientConfig } from '@tanstack/react-query';
import { QueryClientProvider as BaseQueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, type PropsWithChildren } from 'react';

const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      networkMode: 'always',
    },
    mutations: {
      networkMode: 'always',
    },
  },
};

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOption));

  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </BaseQueryClientProvider>
  );
};

export default QueryClientProvider;
