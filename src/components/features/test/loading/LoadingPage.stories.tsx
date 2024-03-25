import { Meta, StoryObj } from '@storybook/react';

import LoadingPage from './LoadingPage';

const meta = {
  title: 'components/features/LoadingPage',
  component: LoadingPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-200">
        <div className="layout bg-white">
          <div className="flex h-dvh w-full items-center justify-center p-xs">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingPage>;

export default meta;
type Story = StoryObj<typeof LoadingPage>;

export const Basic: Story = {
  args: {
    progress: 100,
  },
};
