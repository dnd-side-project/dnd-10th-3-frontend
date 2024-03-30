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
