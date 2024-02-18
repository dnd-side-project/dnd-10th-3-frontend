'use client';

import { Button } from '@/components/common/button';
import useAuth from '@/hooks/api/auth/useAuth';

const Logout = () => {
  const { logout } = useAuth();

  return <Button onClick={() => logout()}>로그아웃</Button>;
};

export default Logout;
