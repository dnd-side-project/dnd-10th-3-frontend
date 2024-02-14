import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '.';

const meta = {
  title: 'components/common/textarea',
  component: Textarea,
  args: {
    placeholder: '텍스트를 입력하세요',
  },
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
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
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  render: (args) => <Textarea {...args} />,
};
