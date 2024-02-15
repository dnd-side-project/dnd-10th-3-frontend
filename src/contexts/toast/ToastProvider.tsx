'use client';

import { ComponentProps, PropsWithChildren, createContext, useState } from 'react';

import { Toast } from '@/components/common/toast';

type ToastInterface = Pick<ComponentProps<typeof Toast>, 'type' | 'message'>;

export const ToastContext = createContext<ToastInterface | null>(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ToastUpdateContext = createContext((toastInterface: ToastInterface | null) => {});

const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toast, setToast] = useState<ToastInterface | null>(null);

  return (
    <ToastContext.Provider value={toast}>
      <ToastUpdateContext.Provider value={setToast}>{children}</ToastUpdateContext.Provider>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
