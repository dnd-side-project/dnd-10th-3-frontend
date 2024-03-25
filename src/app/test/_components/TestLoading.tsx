'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

import { Loading } from '@/components/features/test/loading';
import { TestContext } from '@/contexts/test/TestsProvider';
import { useCreateTestResult } from '@/hooks/test';
import { TestFormType } from '@/types/test';

const DELAY_SECOND = 3;

const TestLoading = () => {
  const router = useRouter();
  const testState = useContext(TestContext);
  const { mutate } = useCreateTestResult();

  useEffect(() => {
    mutate(testState?.state as TestFormType, {
      onSuccess: (data) => {
        setTimeout(() => router.push(`/test/result/${data.id}`), (DELAY_SECOND - 1) * 1000);
      },
    });
  }, [testState?.state, mutate, router]);

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
