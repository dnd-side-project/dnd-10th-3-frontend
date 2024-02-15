import { useContext } from 'react';

import { TOAST_MESSAGES } from '@/constants/toast';
import { ToastUpdateContext } from '@/contexts/toast/ToastProvider';

const useToast = () => {
  const setToast = useContext(ToastUpdateContext);

  const toast = (message: keyof typeof TOAST_MESSAGES) => {
    const { type, text } = TOAST_MESSAGES[message];
    setToast({ type, message: text });
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return toast;
};

export default useToast;
