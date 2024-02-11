import { Meta, StoryObj } from '@storybook/react';

import Tab from './Tab';

const meta = {
  title: 'Components/common/Tabs/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof Tab>;

export const Basic: Story = {
  args: {
    active: true,
    children: '텍스트',
    onClick: () => undefined,
  },
};

export const Examples = () => (
  <>
    <Tab active>텍스트</Tab>
    <Tab>텍스트</Tab>
  </>
);
