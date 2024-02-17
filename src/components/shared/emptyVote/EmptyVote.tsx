import Link from 'next/link';

import { EmptyLayout } from '@/components/layout/errors';

const EmptyVote = () => {
  return (
    <EmptyLayout message={`아직 투표가 없어요\n투표를 만들어 고민을 해결해 보세요`}>
      <Link
        href="/vote/create"
        className="rounded-lg bg-gray-1000 px-xs py-4xs font-semibold text-white"
      >
        투표 만들기
      </Link>
    </EmptyLayout>
  );
};

export default EmptyVote;
