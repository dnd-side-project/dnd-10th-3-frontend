import { z } from 'zod';

export const MIN_NICK_LENGTH = 1;
export const MAX_NICK_LENGTH = 20;

export const nicknameRegex = /^[가-힣a-zA-Z0-9]+$/;

const errorMessageMap = {
  KOR_ENG_ONLY: '닉네임은 한글, 영문, 숫자만 가능해요',
};

export const updateNicknameSchema = z.object({
  nickname: z
    .string()
    .min(MIN_NICK_LENGTH)
    .max(MAX_NICK_LENGTH)
    .regex(nicknameRegex, errorMessageMap['KOR_ENG_ONLY']),
});
