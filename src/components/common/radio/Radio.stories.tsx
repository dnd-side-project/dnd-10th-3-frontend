'use client';

import type { Meta, StoryObj } from '@storybook/react';

import Radio from './Radio';

const meta = {
  title: 'components/common/radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
  render: () => (
    <div className="flex gap-sm">
      <div className="flex items-center gap-4">
        <span>primary</span>
        <Radio />
        <Radio checked />
      </div>
      <div className="flex items-center gap-4">
        <span>gray</span>
        <Radio color="gray" />
        <Radio checked color="gray" />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    checked: false,
    color: 'primary',
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'gray'],
    },
  },
};
