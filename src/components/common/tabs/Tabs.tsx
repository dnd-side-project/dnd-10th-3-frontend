'use client';

import { useState } from 'react';

import { Tab } from './tab';

type TabsProps = {
  tabItems: string[];
  id?: string;
  className?: string;
};

export const Tabs = ({ tabItems }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const handleClickTab = (tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <div className="no-scrollbar flex gap-3xs overflow-x-scroll scroll-smooth border-b border-gray-100 px-4">
      {tabItems.map((item, index) => (
        <Tab key={index} active={index === currentTabIndex} onClick={() => handleClickTab(index)}>
          {item}
        </Tab>
      ))}
    </div>
  );
};
