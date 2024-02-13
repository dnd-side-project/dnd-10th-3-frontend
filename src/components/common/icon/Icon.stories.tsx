import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';
import { COLORS, iconList } from './assets';

const meta = {
  title: 'components/common/icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-5xs">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    color: 'gray-1000',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Object.keys(COLORS),
    },
    icon: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: ({ color }) => (
    <div className="grid grid-cols-4 gap-4">
      {iconList.map((icon) => (
        <div key={icon} className="flex flex-col items-center justify-center gap-1">
          <Icon icon={icon} size={30} color={color} />
          <span>{icon}</span>
        </div>
      ))}
    </div>
  ),
};

export const Playground: Story = {
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconList,
    },
  },
  args: {
    icon: 'heart',
    size: 20,
    color: 'gray-1000',
  },
  render: (args) => (
    <>
      <Icon {...args} />
    </>
  ),
};
