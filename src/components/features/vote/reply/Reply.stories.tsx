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
        reply={{
          commentId: 1,
          voteId: 1,
          userId: 0,
          nickname: '옹기종기',
          status: false,
          content: '트위드 원피스가 화사하고 예뻐요! 혹시 옷 정보 어딘지 알 수 있을까요?',
          avatar: '1',
          likes: 0,
          createdAt: '1709391770112',
          modifiedAt: '1709391770112',
        }}
        onDelete={() => {}}
        onLikeToggle={() => {}}
        isWrittenByCurrentUser={true}
      />
      <Reply
        reply={{
          commentId: 2,
          voteId: 1,
          userId: 0,
          nickname: '옹기종기',
          status: true,
          content: '저도 트위드 원피스가 날 것 같아요! 정보 부탁드려요~',
          avatar: '1',
          likes: 10,
          createdAt: '1709391770112',
          modifiedAt: '1709391770112',
        }}
        onDelete={() => {}}
        onLikeToggle={() => {}}
        isWrittenByCurrentUser={false}
      />
      <Reply
        reply={{
          commentId: 3,
          voteId: 1,
          userId: 0,
          nickname: '옹기종기',
          status: true,
          content: '저는 두 번째 원피스가 예쁘네요!',
          avatar: '1',
          likes: 3,
          createdAt: '1709391770112',
          modifiedAt: '1709391770112',
        }}
        onDelete={() => {}}
        onLikeToggle={() => {}}
        isWrittenByCurrentUser={false}
      />
    </>
  ),
};
