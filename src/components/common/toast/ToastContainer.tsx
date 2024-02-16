'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';

import { ToastContext } from '@/contexts/toast/ToastProvider';

import { Toast } from '.';

const ToastContainer = () => {
  const toast = useContext(ToastContext);

  return (
    <div id="toast" className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[520px] p-[10px]">
      <AnimatePresence mode="wait">
        {toast && (
          <motion.div
            key={Date.now()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toast {...toast} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
