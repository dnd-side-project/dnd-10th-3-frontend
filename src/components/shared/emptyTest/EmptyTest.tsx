import Link from 'next/link';

import { EmptyLayout } from '@/components/layout/errors';

const EmptyTest = () => {
  // FIXME: 임시 문구
  return (
    <EmptyLayout message={`아직 진행한 테스트가 없어요\n테스트하고 축의금 금액 알아봐요`}>
      <Link href="/test" className="rounded-lg bg-gray-1000 px-xs py-4xs font-semibold text-white">
        테스트 하기
      </Link>
    </EmptyLayout>
  );
};

export default EmptyTest;
