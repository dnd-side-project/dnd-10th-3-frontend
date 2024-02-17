'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { BottomSheet } from '@/components/common/bottomSheet';
import { Icon } from '@/components/common/icon';
import { OptionButton } from '@/components/shared';
import { CATEGORIES } from '@/constants/category';
import { Typography } from '@/foundations/typography';

import { CreateVoteInput } from './CreateVoteForm';

type SelectedCategory = undefined | (typeof CATEGORIES)[number];

const CategorySelector = () => {
  const { setValue } = useFormContext<CreateVoteInput>();

  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>(undefined);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  return (
    <>
      <button
        onClick={openBottomSheet}
        className="flex items-center justify-between px-2xs py-3xs text-gray-1000"
      >
        {selectedCategory ?? '투표의 주제를 선택해 주세요.'}
        <Icon icon="chevronRight" color="gray-1000" size={14} />
      </button>
      <BottomSheet open={isBottomSheetOpen} onDismiss={closeBottomSheet}>
        <Typography type="heading3" className="p-3xs text-gray-1000">
          투표의 주제를 선택해 주세요.
        </Typography>
        {CATEGORIES.map((category) => (
          <OptionButton
            key={category}
            option={category}
            isChecked={category === selectedCategory}
            onClick={() => {
              setSelectedCategory(category);
              setValue('category', category);
              setIsBottomSheetOpen(false);
            }}
          />
        ))}
      </BottomSheet>
    </>
  );
};

export default CategorySelector;
