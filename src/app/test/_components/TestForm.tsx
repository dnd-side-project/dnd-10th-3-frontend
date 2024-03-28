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
    <>
      {/* onLoading이란 props를 넘길 필요가 있나?! 
     onLoaindg을 컨텍스트로?! -> 두가지 상태를 분리?! -> 로딩 상태 자체?! 비동기, 자체 로딩을 고민해보고 적용해보자! */}

      {isLoading && (
        <TestLoadingPage onReset={() => setStep('홈')} onLoading={() => setIsLoading(false)} />
      )}
      <FunnelProvider value={{ toPrev, toNext }}>
        <Funnel step={step}>
          {/* TODO : 한글 지양, const 관리하는 것이 좋다. 왜?! */}
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
