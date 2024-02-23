import { Range } from '@/types/util';

const DAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] as const;

export const convertNumToDay = (number: Range<0, 7>) => DAY[number];
