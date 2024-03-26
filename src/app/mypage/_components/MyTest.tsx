'use client';

import { Suspense } from 'react';

import { ResultCard, ResultCardContainer } from '@/components/features/test/resultCard';
import { EmptyTest } from '@/components/shared';
import { useGetMyTest } from '@/hooks/test';

import { Fallback as MyTestFallback } from '.';

const MyTest = () => {
  const { data } = useGetMyTest();

  return (
    <Suspense fallback={<MyTestFallback />}>
      <ResultCardContainer>
        {data.length > 0 ? (
          data.map((result) => <ResultCard key={result.id} result={result} />)
        ) : (
          <EmptyTest />
        )}
      </ResultCardContainer>
    </Suspense>
  );
};

export default MyTest;
