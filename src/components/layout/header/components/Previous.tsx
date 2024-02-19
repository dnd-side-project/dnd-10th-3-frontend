'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/common/button';

type Props = {
  icon?: 'chevronLeft' | 'x';
};

const Previous = ({ icon = 'chevronLeft' }: Props) => {
  const router = useRouter();

  return (
    <Button
      variant="empty"
      iconOnly
      icon={icon}
      iconColor="gray-1000"
      onClick={() => router.back()}
      className="!p-0"
    />
  );
};

export default Previous;
