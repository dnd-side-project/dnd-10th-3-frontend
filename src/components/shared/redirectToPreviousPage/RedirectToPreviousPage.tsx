'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RedirectToPreviousPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, [router]);

  return <></>;
};

export default RedirectToPreviousPage;
