'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';

import { ToastContext } from '@/contexts/toast/ToastProvider';
import { cn } from '@/lib/core';

import { Toast } from '.';

const ToastContainer = () => {
  const toast = useContext(ToastContext);

  return (
    <div
      id="toast"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[390px] px-[10px]"
    >
      <AnimatePresence mode="wait">
        {toast && (
          <motion.div
            key={Date.now()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toast
              type={toast.type}
              message={toast.message}
              className={cn(
                toast.above === 'default' && 'mb-[20px]',
                toast.above === 'button' && 'mb-[80px]',
                toast.above === 'input' && 'mb-[76px]',
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
