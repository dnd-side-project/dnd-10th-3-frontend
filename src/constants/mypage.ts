import { TabItem } from '@/components/common/tabs/Tabs';

export const MYPAGE = ['내 투표 조회', '지난 테스트 결과'] as const;

export const MYPAGE_TAB: TabItem<(typeof MYPAGE)[number]>[] = [
  { name: '내 투표 조회', params: 'vote' },
  { name: '지난 테스트 결과', params: 'test' },
];
