import { Meta, StoryObj } from '@storybook/react';

import { CATEGORY_TAB } from '@/constants/category';
import { MYPAGE_TAB } from '@/constants/mypage';

import { Tabs } from '.';

const meta = {
  title: 'Components/common/tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const CategoryTabs: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      pathname: '/',
      query: {
        tab: ['all', 'money', 'clothes', 'bridal-shower', 'other'],
      },
    },
  },
  render: () => <Tabs tabItems={CATEGORY_TAB} />,
};

export const MypageTabs: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      pathname: '/',
      query: {
        tab: ['test', 'vote'],
      },
    },
  },
  render: () => <Tabs tabItems={MYPAGE_TAB} />,
};
