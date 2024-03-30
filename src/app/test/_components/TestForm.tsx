'use client';

import { useState } from 'react';

import createFunnel from '@/components/features/test/funnel/createFunnel';
import { FUNNEL_LIST } from '@/constants/test/step';
import { FunnelProvider } from '@/contexts/test/useFunnelContext';

import TestHomePage from './TestHomePage';
import TestLoadingPage from './TestLoadingPage';
import TestStep from './TestStep';

const { Funnel, Step, useFunnel } = createFunnel(FUNNEL_LIST);

const TestForm = () => {
  const { step, setStep, toNext, toPrev } = useFunnel();
  const [isLoading, setIsLoading] = useState(false);

  return (
    // 테스트 시작 랜딩 페이지 다음 PR SSR로 분리 예정
    <>
      {isLoading && (
        <TestLoadingPage onReset={() => setStep('홈')} onLoading={() => setIsLoading(false)} />
      )}
      <FunnelProvider value={{ toPrev, toNext }}>
        <Funnel step={step}>
          <Step name="홈">
            <TestHomePage />
          </Step>
          {FUNNEL_LIST.map((funnelName) => {
            return (
              <Step name={funnelName} key={funnelName}>
                <TestStep currentStep={step} onLoading={() => setIsLoading(true)} />
              </Step>
            );
          })}
        </Funnel>
      </FunnelProvider>
    </>
  );
};

export default TestForm;
