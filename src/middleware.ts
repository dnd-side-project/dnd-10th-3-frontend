import { NextRequest, NextResponse } from 'next/server';

import { CALLBACK_URL, TOKEN } from '@/constants/auth';

const middleware = async (request: NextRequest) => {
  const refreshToken = request.cookies.get(TOKEN.REFRESH_TOKEN);

  if (!refreshToken) {
    return NextResponse.redirect(
      new URL(`/login?${CALLBACK_URL}=${encodeURIComponent(request.url)}`, request.url),
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/vote/:path+', '/mypage'],
};

export default middleware;
