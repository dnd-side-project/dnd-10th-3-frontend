import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/button';
import { VoteItem } from '@/components/features/vote/voteItem';

import VoteCard from './VoteCard';

const meta = {
  title: 'components/features/voteCard',
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
          <VoteItem>
            <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
            <VoteItem.IconButton icon="photo" />
          </VoteItem>
          <VoteItem>
            <VoteItem.Input placeholder="텍스트를 입력해 주세요." />
            <VoteItem.IconButton icon="photo" />
          </VoteItem>
        </VoteCard.VoteItemGroup>
        <VoteCard.SubmitButton>
          <Button variant="secondary" width="full" icon="add" iconColor="gray-1000" iconSize={12}>
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
        <VoteCard.Header categories="축의금" remainingDay={2} />
        <VoteCard.Description
          title="갑자기 연락 온 동창 축의금 얼마할까요? 고민됩니다."
          content=" 제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락 안하고 지내다가 최근에 연락이
        되었어요. 옛날..."
        />
        <VoteCard.VoteItemGroup withBlur>
          <VoteItem readOnly>
            <VoteItem.Radio disabled />
            <VoteItem.Span>5만원</VoteItem.Span>
          </VoteItem>
          <VoteItem readOnly>
            <VoteItem.Radio disabled />
            <VoteItem.Span>7만원</VoteItem.Span>
          </VoteItem>
        </VoteCard.VoteItemGroup>
        <VoteCard.SubmitButton>
          <Button variant="primary" width="full">
            투표 참여하기
          </Button>
        </VoteCard.SubmitButton>
        <VoteCard.Footer likes={48} view={48} voter={451} />
      </VoteCard>
    );
  },
};

export const VoteWithoutFooter: Story = {
  render: () => {
    return (
      <VoteCard>
        <VoteCard.Header remainingDay={2} voter={89} fontColor="text-gray-600" />
        <VoteCard.VoteItemGroup>
          <VoteItem>
            <VoteItem.Radio checked />
            <VoteItem.Span>5만원</VoteItem.Span>
          </VoteItem>
          <VoteItem>
            <VoteItem.Radio />
            <VoteItem.Span>7만원</VoteItem.Span>
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
