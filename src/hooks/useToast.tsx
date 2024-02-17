import { useContext } from 'react';

import { TOAST_MESSAGES } from '@/constants/toast';
import { ToastUpdateContext } from '@/contexts/toast/ToastProvider';

type ToastParams =
  | {
      type?: never;
      message: keyof typeof TOAST_MESSAGES;
    }
  | {
      type: 'default' | 'warning';
      message: string;
    };

const useToast = () => {
  const setToast = useContext(ToastUpdateContext);

  const toast = ({ type, message }: ToastParams) => {
    if (type) {
      setToast({ type, message });
    } else {
      setToast({ type: TOAST_MESSAGES[message].type, message: TOAST_MESSAGES[message].text });
    }
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return toast;
};

export default useToast;
