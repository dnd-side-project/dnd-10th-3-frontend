import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/components/common/typography';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'components/common/divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const DummyTypo = () => (
  <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
);

export const Basic: Story = {
  render: () => (
    <>
      <DummyTypo />
      <Divider />
      <DummyTypo />
    </>
  ),
};

export const WithWidth: Story = {
  render: () => (
    <>
      <DummyTypo />
      <Divider width={'25%'} />
      <DummyTypo />
      <Divider width={'50%'} />
      <DummyTypo />
      <Divider width={'100%'} />
      <DummyTypo />
    </>
  ),
};

export const WithHeight: Story = {
  render: () => (
    <>
      <DummyTypo />
      <Divider height={1} />
      <DummyTypo />
      <Divider height={2} />
      <DummyTypo />
      <Divider height={8} />
      <DummyTypo />
    </>
  ),
};

export const WithColor: Story = {
  render: () => (
    <>
      <DummyTypo />
      <Divider color="gray-50" />
      <DummyTypo />
      <Divider color="gray-100" />
      <DummyTypo />
      <Divider color="gray-600" />
      <DummyTypo />
    </>
  ),
};

export const Playground: Story = {
  argTypes: {
    width: {
      control: { type: 'inline-radio' },
      options: ['25%', '50%', '100%'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['gray-50', 'gray-100', 'gray-600'],
    },
    height: {
      control: { type: 'inline-radio' },
      options: [1, 2, 8],
    },
  },
  args: {
    width: '100%',
    color: 'gray-50',
    height: 1,
  },
  render: (args) => (
    <>
      <DummyTypo />
      <Divider {...args} />
      <DummyTypo />
    </>
  ),
};
