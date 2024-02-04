'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { tabMap, tabs } from '@/constants/tab';
import { cn } from '@/lib/core';

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <nav className="select-none overflow-hidden rounded-full border border-gray-200 text-sm font-semibold">
      <ul className="flex">
        {tabs.map((tab) => (
          <li key={tab} className="relative px-6 py-2 text-center">
            <Link
              href={`/${tab}`}
              onClick={() => setSelectedTab(tab)}
              className={cn(
                'relative z-10 transition-colors duration-500',
                tab === selectedTab ? 'text-gray-50' : 'text-gray-400',
              )}
            >
              {tabMap[tab]}
            </Link>
            {tab === selectedTab && (
              <motion.div className="absolute inset-0 rounded-full bg-gray-600" layoutId="toggle" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tab;
