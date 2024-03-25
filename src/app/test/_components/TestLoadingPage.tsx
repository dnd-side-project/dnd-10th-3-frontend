'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import LoadingPage from '@/components/features/test/loading/LoadingPage';
import { LOADING_SECOND_TIMEOUT } from '@/constants/test';
import { useTestState } from '@/contexts/test/TestsProvider';
import { useToast } from '@/hooks';
import { useCreateTestResult } from '@/hooks/test';

type TestLoadingType = {
  onReset: () => void;
  onLoading: () => void;
};

const TestLoadingPage = ({ onReset, onLoading }: TestLoadingType) => {
  const router = useRouter();
  const test = useTestState();
  const { mutateAsync } = useCreateTestResult();
  const toast = useToast();

  useEffect(() => {
    const handlePostTestResult = async () => {
      try {
        const startMs = performance.now();
        const testResult = await mutateAsync(test);
        const endMs = performance.now();
        const diffMsToSec = Math.round(endMs - startMs) / 1000;
        setTimeout(
          () => {
            router.push(`/test/result/${testResult.id}`);
          },
          (LOADING_SECOND_TIMEOUT - diffMsToSec) * 1000,
        );
      } catch (errors) {
        toast({ type: 'warning', message: '테스트 결과 요청에 실패하였습니다.' });
        onLoading();
        onReset();
      }
    };

    handlePostTestResult();
  }, [mutateAsync, router, test, toast, onReset, onLoading]);

  return (
    <div className="flex size-full flex-col items-center justify-center pb-2xs">
      <div className="flex h-dvh w-full items-center justify-center p-xs">
        <LoadingPage duration={LOADING_SECOND_TIMEOUT} />
      </div>
    </div>
  );
};

export default TestLoadingPage;
