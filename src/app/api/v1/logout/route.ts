import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST = async () => {
  const accessToken = cookies().get('accessToken');
  const refreshToken = cookies().get('refreshToken');

  if (!accessToken || !refreshToken) {
    return NextResponse.json({
      status: 400,
      message: '로그아웃에 실패했습니다.',
    });
  }

  cookies().delete('accessToken');
  cookies().delete('refreshToken');

  return NextResponse.json({
    status: 200,
    message: '로그아웃 되었습니다.',
  });
};
