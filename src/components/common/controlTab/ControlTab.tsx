import { Dispatch, SetStateAction } from 'react';

import { cn } from '@/lib/core';

type Props<T> = {
  controlTabItems: readonly T[];
  selectedTab: T;
  setSelectedTab: Dispatch<SetStateAction<T>>;
};

const ControlTab = <T extends string>({
  controlTabItems,
  selectedTab,
  setSelectedTab,
}: Props<T>) => {
  return (
    <div className="flex gap-4xs">
      {controlTabItems.map((tab) => (
        <button
          key={tab}
          className={cn(
            'text-sm text-gray-400',
            tab === selectedTab && 'text-gray-600 font-semibold',
          )}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ControlTab;
