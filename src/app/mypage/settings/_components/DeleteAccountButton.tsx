'use client';

import { useAuth } from '@/hooks/api/auth';

const DeleteAccountButton = () => {
  const { deleteUser } = useAuth();

  return (
    <button className="w-full py-3xs text-start" onClick={() => deleteUser()}>
      회원 탈퇴
    </button>
  );
};

export default DeleteAccountButton;
