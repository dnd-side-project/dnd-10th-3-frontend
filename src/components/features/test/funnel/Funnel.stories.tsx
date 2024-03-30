import type { Meta, StoryObj } from '@storybook/react';

import createFunnel from './createFunnel';

const meta = {
  title: 'Components/Features/test/Funnel',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-200">
        <div className="layout bg-white">
          <div className="flex h-dvh w-full flex-col items-center justify-center p-xs">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const { Funnel, Step, useFunnel } = createFunnel([
  '홈',
  '사전1',
  '사전2',
  '본1',
  '본2',
  '본3',
  '본4',
  '본5',
  '본6',
  '본7',
  '본8',
  '본9',
] as const);

export const Default: Story = {
  render: () => {
    const DefaultPage = () => {
      const { step, toNext, toPrev } = useFunnel();

      return (
        <Funnel step={step}>
          <Step name="홈">
            메인 페이지
            <div className="flex flex-col">
              <button onClick={toNext}>테스트 진행하기</button>
            </div>
          </Step>
          <Step name="사전1">
            사전 1
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="사전2">
            사전 2
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본1">
            본1
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본2">
            본2
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본3">
            본3
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본4">
            본4
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본5">
            본5
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본6">
            본6
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본7">
            본7
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본8">
            본8
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={toNext}>다음</button>
            </div>
          </Step>
          <Step name="본9">
            본9
            <div className="flex flex-col">
              <button onClick={toPrev}>이전</button>
              <button onClick={() => alert('제출')}>제출</button>
            </div>
          </Step>
        </Funnel>
      );
    };

    return <DefaultPage />;
  },
};
