'use client';

import createFunnel from '@/components/features/test/funnel/createFunnel';
import { funnelList } from '@/constants/test/step';
import { FunnelProvider } from '@/contexts/test/useFunnelContext';

import TestHomePage from './TestHomePage';
import TestStep from './TestStep';

const { Funnel, Step, useFunnel } = createFunnel(funnelList);

const TestForm = () => {
  const { step, toNext, toPrev } = useFunnel();

  return (
    <FunnelProvider value={{ toPrev, toNext }}>
      <Funnel step={step}>
        <Step name="홈">
          <TestHomePage />
        </Step>
        {funnelList.map((funnelName) => {
          return (
            <Step name={funnelName} key={funnelName}>
              <TestStep currentStep={step} />
            </Step>
          );
        })}
      </Funnel>
    </FunnelProvider>
  );
};

export default TestForm;
