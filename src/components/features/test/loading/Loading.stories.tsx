import type { Meta, StoryObj } from '@storybook/react';

import Loading from './Loading';

const meta = {
  title: 'components/features/loading',
  component: Loading,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-200">
        <div className="layout bg-white p-2xs">
          <div className="flex w-full gap-2">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Basic: Story = {
  args: {
    progress: 50,
  },
};
