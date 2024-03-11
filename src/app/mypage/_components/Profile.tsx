'use client';

import Link from 'next/link';

import { Icon } from '@/components/common/icon';
import { Typography } from '@/foundations/typography';
import { useGetUser } from '@/hooks/auth';

const Profile = () => {
  const { data: user } = useGetUser();

  return (
    <section className="flex items-center gap-4xs p-2xs">
      <Icon icon="profile" color="gray-100" size={32} />
      <Typography type="body2" className="grow text-gray-600">
        {user?.nickname}
      </Typography>
      <Link
        href="/mypage/info"
        className="shrink-0 rounded-lg bg-gray-100 px-3xs py-5xs text-sm text-gray-1000"
      >
        수정
      </Link>
    </section>
  );
};

export default Profile;
