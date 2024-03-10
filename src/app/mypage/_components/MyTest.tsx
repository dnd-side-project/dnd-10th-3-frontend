'use client';

import { ResultCard, ResultCardContainer } from '@/components/features/test/resultCard';
import { EmptyTest } from '@/components/shared';
import { useGetMyTest } from '@/hooks/test';

const MyTest = () => {
  const { data, status } = useGetMyTest();

  return (
    <>
      <ResultCardContainer>
        {status === 'pending' ? (
          <></>
        ) : status === 'error' ? (
          <></>
        ) : data.length > 0 ? (
          data.map((result) => <ResultCard key={result.id} result={result} />)
        ) : (
          <EmptyTest />
        )}
      </ResultCardContainer>
    </>
  );
};

export default MyTest;
