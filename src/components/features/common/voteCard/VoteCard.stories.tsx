import type { Meta, StoryObj } from '@storybook/react';

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

export const Basic: Story = {};
