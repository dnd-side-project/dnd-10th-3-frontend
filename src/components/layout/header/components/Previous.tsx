'use client';

import { useRouter } from 'next/navigation';

import { Icon } from '@/components/common/icon';

const Previous = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <Icon icon="chevronLeft" color="gray-1000" size={20} />
    </button>
  );
};

export default Previous;
