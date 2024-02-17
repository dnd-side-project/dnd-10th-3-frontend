import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CATEGORY_TAB, MYPAGE_TAB } from '@/constants/category';

import { Tabs } from '.';
import { Tab } from './Tabs';

const meta = {
  title: 'Components/common/tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

// FIXME: Tabs 내부 useSearchParams 호출로 인해 스토리북에서 Tabs를 사용할 수 없어 Tab만을 활용해 임시 구현
const CategoryTabExample = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <nav className="no-scrollbar flex shrink-0 gap-3xs overflow-x-scroll scroll-smooth border-b border-gray-100 px-2xs">
      {CATEGORY_TAB.map((item) => (
        <button key={item.name} onClick={() => setSelectedTab(item.params)} className="flex">
          <Tab item={item} isSelected={selectedTab === item.params} />
        </button>
      ))}
    </nav>
  );
};

export const CategoryTabs: Story = {
  render: () => <CategoryTabExample />,
};

const MypageTabExample = () => {
  const [selectedTab, setSelectedTab] = useState('vote');

  return (
    <nav className="no-scrollbar flex shrink-0 gap-3xs overflow-x-scroll scroll-smooth border-b border-gray-100 px-2xs">
      {MYPAGE_TAB.map((item) => (
        <>
          <button key={item.name} onClick={() => setSelectedTab(item.params)} className="flex">
            <Tab key={item.name} item={item} isSelected={selectedTab === item.params} />
          </button>
        </>
      ))}
    </nav>
  );
};

export const MypageTabs: Story = {
  render: () => <MypageTabExample />,
};
