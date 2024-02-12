'use client';

import { useRouter } from 'next/router';

import { Icon } from '@/components/common/icon';

const Previous = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <Icon icon="chevronLeft" color="black" size={20} />
    </button>
  );
};

export default Previous;
