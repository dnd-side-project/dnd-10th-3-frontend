import type { PropsWithChildren } from 'react';

import QueryClientProvider from './reactQuery/QueryClientProvider';
import ToastProvider from './toast/ToastProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
};

export default Providers;
