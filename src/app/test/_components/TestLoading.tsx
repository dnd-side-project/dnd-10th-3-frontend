'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Loading } from '@/components/features/test/loading';
import { useCreateTestResult } from '@/hooks/test';
import { TestFormType } from '@/types/test';

type Props = {
  state: TestFormType;
};

const DELAY_SECOND = 3;

const TestLoading = ({ state }: Props) => {
  const router = useRouter();
  const { mutate } = useCreateTestResult();

  useEffect(() => {
    mutate(state, {
      onSuccess: (data) => {
        setTimeout(() => router.push(`/test/result/${data.id}`), (DELAY_SECOND - 1) * 1000);
      },
    });
  }, [state, mutate, router]);

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
