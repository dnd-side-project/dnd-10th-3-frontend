import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const { code } = await request.json();

  if (code === '') {
    return NextResponse.json({
      status: 400,
      message: '로그인에 실패했습니다.',
    });
  }

  cookies().set('accessToken', 'access1234', { httpOnly: true });
  cookies().set('refreshToken', 'refresh1234', { httpOnly: true });
  return NextResponse.json({
    status: 200,
    message: '로그인에 성공했습니다.',
  });
};
