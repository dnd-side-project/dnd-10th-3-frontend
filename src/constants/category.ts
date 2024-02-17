import { TabItem } from '@/components/common/tabs/Tabs';

export const CATEGORIES = ['축의금', '하객룩', '브라이덜샤워', '기타'] as const;
export const CATEGORIES_FOR_TAB = ['전체', ...CATEGORIES] as const;

export const CATEGORY_TAB: TabItem<(typeof CATEGORIES_FOR_TAB)[number]>[] = [
  { name: '전체', params: 'all' },
  { name: '축의금', params: 'money' },
  { name: '하객룩', params: 'clothes' },
  { name: '브라이덜샤워', params: 'bridal-shower' },
  { name: '기타', params: 'other' },
];

// TODO 헤더의 tab을 토글로 변경한 후 constants 정리
export const MYPAGE = ['내 투표 조회', '지난 테스트 결과'] as const;

export const MYPAGE_TAB: TabItem<(typeof MYPAGE)[number]>[] = [
  { name: '내 투표 조회', params: 'vote' },
  { name: '지난 테스트 결과', params: 'test' },
];
