'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/core';

export type TabItem<TName> = {
  name: TName;
  params: string;
};

type Props<T> = {
  tabItems: TabItem<T>[];
};

export const Tabs = <T extends string>({ tabItems }: Props<T>) => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get('tab') ?? tabItems[0].params;

  return (
    <nav className="no-scrollbar flex shrink-0 gap-3xs overflow-x-scroll scroll-smooth border-b border-gray-100 px-2xs">
      {tabItems.map((item) => (
        <Tab key={item.name} item={item} isSelected={selectedTab === item.params} />
      ))}
    </nav>
  );
};

type TabProps<TName> = {
  item: TabItem<TName>;
  isSelected: boolean;
};

export const Tab = <TName extends string>({ item, isSelected }: TabProps<TName>) => {
  return (
    <Link
      href={`?tab=${item.params}`}
      replace
      className={cn(
        'cursor-pointer min-w-fit border-b-2 px-5xs pb-5xs text-gray-400',
        isSelected ? 'border-gray-1000 text-gray-1000' : 'border-white',
      )}
    >
      {item.name}
    </Link>
  );
};
