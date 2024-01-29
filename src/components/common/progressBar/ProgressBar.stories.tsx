import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'components/common/progressBar',
  component: ProgressBar,
  argTypes: {
    currentProgress: {
      control: {
        type: 'number',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    currentProgress: 100,
  },
  render: () => (
    <>
      <ProgressBar currentProgress={10} />
      <br />
      <ProgressBar currentProgress={20} />
      <br />
      <ProgressBar currentProgress={30} />
      <br />
      <ProgressBar currentProgress={40} />
      <br />
      <ProgressBar currentProgress={80} />
      <br />
      <ProgressBar currentProgress={100} />
    </>
  ),
};
