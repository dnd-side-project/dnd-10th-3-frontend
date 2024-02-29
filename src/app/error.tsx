'use client';

import { isAxiosError } from 'axios';

import {
  ApiErrorHandler,
  NetworkErrorHandler,
  UnauthorizedErrorHandler,
  UnknownErrorHandler,
} from '@/components/shared/errorHandler';

const getErrorHandler = (error: unknown) => {
  if (isAxiosError(error) && error.code === 'ERR_NETWORK') {
    return NetworkErrorHandler;
  }
  if (isAxiosError(error) && error.response?.status === 403) {
    return UnauthorizedErrorHandler;
  }
  if (isAxiosError(error) && error.code === 'ERR_BAD_REQUEST') {
    return ApiErrorHandler;
  }
  return UnknownErrorHandler;
};

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  const errorHandler = getErrorHandler(error);
  const Fallback = () => errorHandler({ error, reset });

  return <Fallback />;
};

export default Error;
