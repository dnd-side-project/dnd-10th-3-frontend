import type { Meta, StoryObj } from '@storybook/react';

import Reply from './Reply';

const meta = {
  title: 'components/features/vote/reply',
  component: Reply,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-200">
        <div className="layout bg-white p-2xs">
          <div className="flex flex-col gap-2">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Reply>;

export default meta;
type Story = StoryObj<typeof Reply>;

export const Basic: Story = {
  render: () => (
    <>
      <Reply
        id={1}
        nickname="옹기종기"
        createdAt={'10분전'} // TODO: timestamp
        content="트위드 원피스가 화사하고 예뻐요! 혹시 옷 정보 어딘지 알 수 있을까요?"
        likes={4}
        status={false}
      />
      <Reply
        id={1}
        nickname="옹기종기"
        createdAt={'10분전'} // TODO: timestamp
        content="저도 트위드 원피스가 날 것 같아요! 정보 부탁드려요~"
        likes={10}
        status={true}
      />
      <Reply
        id={1}
        nickname="옹기종기"
        createdAt={'10분전'} // TODO: timestamp
        content="저는 두 번째 원피스가 예쁘네요!"
        likes={0}
        status={false}
      />
    </>
  ),
};
