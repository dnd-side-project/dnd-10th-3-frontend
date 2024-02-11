import type { Meta, StoryObj } from '@storybook/react';

import { EmptyVoteLayout } from '.';

const meta: Meta<typeof EmptyVoteLayout> = {
  title: 'components/layout/EmptyVoteLayout',
  component: EmptyVoteLayout,
};

export default meta;

type Story = StoryObj<typeof EmptyVoteLayout>;

export const Default: Story = {
  args: {
    color: 'text-blue-30',
  },
};
