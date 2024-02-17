import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta = {
  title: 'components/common/tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

export const Basic = {
  render: () => (
    <div className="flex gap-4xs">
      <div className="flex flex-col items-center justify-center gap-4xs">
        <Tag variant="primary">진행중</Tag>
        <Tag variant="primary">전체</Tag>
        <Tag variant="primary">참여한 투표</Tag>
        <Tag variant="primary">만든 투표</Tag>
      </div>

      <div className="flex flex-col items-center justify-center gap-4xs">
        <Tag variant="primary">1/10</Tag>
      </div>
    </div>
  ),
} satisfies Story;
