import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { VoteItem } from '@/components/features/vote/voteItem';

import VoteCard from './VoteCard';

const meta = {
  title: 'components/features/vote/voteCard',
  component: VoteCard,
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
} satisfies Meta<typeof VoteCard>;

export default meta;
type Story = StoryObj<typeof VoteCard>;

export const Basic: Story = {
  render: () => {
    return (
      <VoteCard>
        <VoteCard.Header />
        <VoteCard.VoteItemGroup>
          {/* TODO : VoteItem 컴포넌트 기능 추가된 후 구현 가능 */}
          <VoteItem mode="input">
            <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
            <VoteItem.IconButton icon="photo" />
          </VoteItem>
          <VoteItem mode="input">
            <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
            <VoteItem.IconButton icon="photo" />
          </VoteItem>
        </VoteCard.VoteItemGroup>
        <VoteCard.SubmitButton>
          <Button
            variant="secondary"
            width="full"
            Icon={<Icon icon="add" color="gray-1000" size={12} />}
          >
            항목 추가
          </Button>
        </VoteCard.SubmitButton>
      </VoteCard>
    );
  },
};

export const ReadOnlyWithFooter: Story = {
  render: () => {
    return (
      <VoteCard className="shadow-thumb">
        <VoteCard.Header categories="축의금" closeDate="2024-02-24" />
        <VoteCard.Description
          title="갑자기 연락 온 동창 축의금 얼마할까요? 고민됩니다."
          content=" 제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락 안하고 지내다가 최근에 연락이
        되었어요. 옛날..."
        />
        <VoteCard.VoteItemGroup withBlur>
          <VoteItem mode="read">
            <VoteItem.Radio />
            <VoteItem.Text>5만원</VoteItem.Text>
          </VoteItem>
          <VoteItem mode="read">
            <VoteItem.Radio />
            <VoteItem.Text>7만원</VoteItem.Text>
          </VoteItem>
        </VoteCard.VoteItemGroup>
        <VoteCard.SubmitButton>
          <Button variant="primary" width="full">
            투표 참여하기
          </Button>
        </VoteCard.SubmitButton>
        <VoteCard.Footer likes={48} views={48} voters={451} />
      </VoteCard>
    );
  },
};

export const VoteWithoutFooter: Story = {
  render: () => {
    return (
      <VoteCard>
        <VoteCard.Header closeDate="2024-02-24" voter={89} fontColor="text-gray-600" />
        <VoteCard.VoteItemGroup>
          <VoteItem mode="select">
            <VoteItem.Radio checked />
            <VoteItem.Text>5만원</VoteItem.Text>
          </VoteItem>
          <VoteItem mode="select">
            <VoteItem.Radio />
            <VoteItem.Text>7만원</VoteItem.Text>
          </VoteItem>
        </VoteCard.VoteItemGroup>
        <VoteCard.SubmitButton>
          <Button variant="primary" width="full">
            투표 참여하기
          </Button>
        </VoteCard.SubmitButton>
      </VoteCard>
    );
  },
};
