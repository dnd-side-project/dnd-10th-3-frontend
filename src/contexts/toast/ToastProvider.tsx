'use client';

import { PropsWithChildren, createContext, useState } from 'react';

import { TOAST_MESSAGES } from '@/constants/toast';

export type ToastInterface =
  | {
      type?: never;
      message: keyof typeof TOAST_MESSAGES;
      above?: 'button' | 'input' | 'default';
    }
  | {
      type: 'default' | 'warning';
      message: string;
      above?: 'button' | 'input' | 'default';
    };

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
