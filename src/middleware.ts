import { NextRequest, NextResponse } from 'next/server';

import { CALLBACK_URL, IS_LOGIN } from '@/constants/auth';

const middleware = async (request: NextRequest) => {
  if (!request.cookies.has(IS_LOGIN)) {
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
