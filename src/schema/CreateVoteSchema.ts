import { z } from 'zod';

export const MIN_INPUT_LENGTH = 1;
export const MAX_TITLE_LENGTH = 40;
export const MAX_CONTENT_LENGTH = 150;
export const MAX_ITEM_LENGTH = 20;

export const MIN_VOTE_COUNT = 2;
export const MAX_VOTE_COUNT = 5;

const errorMessageMap = {
  VOTE_CATEGORY_REQUIRED: '투표의 주제를 선택해 주세요',
  VOTE_TITLE_REQUIRED: '제목을 입력해 주세요',
  VOTE_CONTENT_REQUIRED: '내용을 입력해 주세요',
  VOTE_ITEM_REQUIRED: '투표 항목을 모두 입력해 주세요',
  LEAST_TWO_ITEMS_REQUIRED: '투표 항목을 2개 이상 입력해 주세요',
  MAX_FIVE_ITEMS: '투표 항목은 최대 5개입니다',
};

export const createVoteSchema = z.object({
  category: z.string().min(MIN_INPUT_LENGTH, errorMessageMap['VOTE_CATEGORY_REQUIRED']),
  title: z
    .string()
    .min(MIN_INPUT_LENGTH, errorMessageMap['VOTE_TITLE_REQUIRED'])
    .max(MAX_TITLE_LENGTH),
  content: z
    .string()
    .min(MIN_INPUT_LENGTH, errorMessageMap['VOTE_CONTENT_REQUIRED'])
    .max(MAX_CONTENT_LENGTH),
  selections: z
    .array(
      z.object({
        content: z.string().min(MIN_INPUT_LENGTH, errorMessageMap['VOTE_ITEM_REQUIRED']),
        img: z.union([z.instanceof(File), z.string()]),
      }),
    )
    .min(MIN_VOTE_COUNT, errorMessageMap['LEAST_TWO_ITEMS_REQUIRED'])
    .max(MAX_VOTE_COUNT, errorMessageMap['MAX_FIVE_ITEMS']),
  closeDate: z.string(),
});
