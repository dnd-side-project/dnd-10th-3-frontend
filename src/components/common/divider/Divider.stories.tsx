import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/foundations/typography';

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
      <Divider height={'sm'} />
      <DummyTypo />
      <Divider height={'md'} />
      <DummyTypo />
      <Divider height={'lg'} />
      <DummyTypo />
    </>
  ),
};

export const WithMargin: Story = {
  render: () => (
    <>
      <DummyTypo />
      <Divider margin={'xs'} />
      <DummyTypo />
      <Divider margin={'sm'} />
      <DummyTypo />
      <Divider margin={'md'} />
      <DummyTypo />
      <Divider margin={'lg'} />
      <DummyTypo />
      <Divider margin={'xl'} />
      <DummyTypo />
    </>
  ),
};

export const WithColor: Story = {
  render: () => (
    <>
      <DummyTypo />
      <Divider color="dimmed" />
      <DummyTypo />
      <Divider color="primary" />
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
    margin: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'dimmed'],
    },
    height: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    width: '100%',
    margin: 'md',
    color: 'dimmed',
    height: 'sm',
  },
  render: (args) => (
    <>
      <DummyTypo />
      <Divider {...args} />
      <DummyTypo />
    </>
  ),
};
