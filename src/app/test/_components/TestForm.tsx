'use client';

import Image from 'next/image';
import { useContext } from 'react';

import LogoImage from '@/assets/images/logo.png';
import { default as WorryImage } from '@/assets/images/test-worry.png';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Typography } from '@/components/common/typography';
import createFunnel from '@/components/features/test/funnel/createFunnel';
import { Header } from '@/components/layout/header';
import { funnelList } from '@/constants/test/step';
import { TestContext } from '@/contexts/test/TestProvider';
import { FunnelProvider } from '@/contexts/test/useFunnelContext';
import { useToast } from '@/hooks';
import { Range } from '@/types/util';

import TestStep from './TestStep';

export type StepProps = Range<0, 12>;

const { Funnel, Step, useFunnel } = createFunnel(funnelList);

const TestForm = () => {
  const toast = useToast();
  const testState = useContext(TestContext);
  const { step, toNext, toPrev } = useFunnel();

  const handleTestFormInvalid = () => {
    if (testState?.state.buddy) {
      toNext();
      return;
    }
    return toast({ message: 'NICKNAME_REQUIRED', above: 'button' });
  };

  const handleOnKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTestFormInvalid();
    }
  };

  return (
    <FunnelProvider value={{ toPrev, toNext }}>
      <Funnel step={step}>
        <Step name="홈">
          <div className="relative flex size-full h-dvh flex-col items-center bg-mainGradient pb-2xs">
            <Header>
              <Header.Logo />
              <Header.ToggleNav />
              <Header.IconLink href="/mypage" icon="mypage" />
            </Header>

            <main className="flex size-full flex-col items-center px-2xs">
              <div className="flex h-full flex-col items-center justify-evenly">
                <div className="flex flex-col items-center gap-4xs">
                  <Image src={LogoImage} width={150} height={91} alt="logo" priority />
                  <Typography type="title1">축의금 결정이 너무 어려웠나요?</Typography>
                </div>

                <div className="flex flex-col items-center gap-xs">
                  <Image src={WorryImage} width={275} alt="logo" priority />
                  <Input
                    type="fit"
                    placeholder=" 상대 이름을 입력해주세요"
                    className="text-center"
                    value={testState?.state.buddy}
                    onChange={(e) =>
                      testState?.dispatch({ type: 'setBuddyName', value: e.target.value })
                    }
                    onKeyUp={handleOnKeyEnter}
                  />
                </div>
              </div>
              <Button width="full" onClick={handleTestFormInvalid}>
                테스트하고 축의금 알아보기
              </Button>
            </main>
          </div>
        </Step>
        {funnelList.map((funnelName, index) => {
          return (
            <Step name={funnelName} key={index}>
              <TestStep step={step} />
            </Step>
          );
        })}
      </Funnel>
    </FunnelProvider>
  );
};

export default TestForm;
