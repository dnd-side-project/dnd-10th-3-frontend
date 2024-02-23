'use client';

import { useAuth } from '@/hooks/auth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button className="w-full py-3xs text-start" onClick={() => logout()}>
      로그아웃
    </button>
  );
};

export default LogoutButton;
