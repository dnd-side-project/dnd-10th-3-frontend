import { LOGIN_MESSAGE } from '@/constants/auth';

export const getLoginMessage = (callbackUrl: string) => {
  if (callbackUrl.includes('vote/create')) {
    return LOGIN_MESSAGE.CREATE;
  }
  if (/(vote\/)\w/.test(callbackUrl)) {
    return LOGIN_MESSAGE.VOTE;
  }
  return LOGIN_MESSAGE.DEFAULT;
};
