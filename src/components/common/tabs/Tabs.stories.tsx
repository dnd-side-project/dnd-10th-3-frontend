import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '.';

const meta = {
  title: 'Components/common/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => {
    return <Tabs tabItems={['전체 ', '축의금', '하객룩', '브라이덜 샤워', '기타']} />;
  },
};
