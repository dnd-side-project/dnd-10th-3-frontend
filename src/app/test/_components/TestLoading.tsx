import { useRouter } from 'next/navigation';

import { Loading } from '@/components/features/test/loading';
import useTimeout from '@/hooks/useTimeout';

const DELAY_SECOND = 4;

const TestLoading = () => {
  const router = useRouter();
  useTimeout(() => router.push('test/result'), DELAY_SECOND * 1000);

  return (
    <div className="flex size-full flex-col items-center justify-center pb-2xs">
      {/* TODO : 로딩시 요청 취소 기능 구현 후 Header 컴포넌트 추가  */}
      <div className="flex h-dvh w-full items-center justify-center p-xs">
        <Loading progress={100} delay={DELAY_SECOND} />
      </div>
    </div>
  );
};

export default TestLoading;
