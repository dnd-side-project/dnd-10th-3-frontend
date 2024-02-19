'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { toggleNavItems } from '@/constants/toggleNav';
import { cn } from '@/lib/core';

const ToggleNav = () => {
  const [selectedTab, setSelectedTab] = useState(toggleNavItems[0].name);

  return (
    <nav className="select-none overflow-hidden rounded-full bg-gray-50 text-sm font-semibold">
      <ul className="flex">
        {toggleNavItems.map(({ name, href }) => (
          <li key={name} className="relative px-3xs py-5xs text-center">
            <Link
              href={`/${href}`}
              onClick={() => setSelectedTab(name)}
              className={cn(
                'relative z-50 transition-colors duration-500',
                name === selectedTab ? 'text-white' : 'text-gray-600',
              )}
            >
              {name}
            </Link>
            {name === selectedTab && (
              <motion.div className="absolute inset-0 rounded-full bg-gray-900" layoutId="toggle" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ToggleNav;
