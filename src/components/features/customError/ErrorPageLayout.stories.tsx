import { Meta, StoryObj } from '@storybook/react';

import ErrorPageLayout from './ErrorPageLayout';

const meta = {
  title: 'components/features/customError',
  component: ErrorPageLayout,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-200">
        <div className="layout bg-white">
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorPageLayout>;

export default meta;
type Story = StoryObj<typeof ErrorPageLayout>;

export const ErrorWithNetwork: Story = {
  render: () => <ErrorPageLayout statusCode={500} />,
};

export const ErrorWithClient: Story = {
  render: () => <ErrorPageLayout statusCode={404} />,
};
