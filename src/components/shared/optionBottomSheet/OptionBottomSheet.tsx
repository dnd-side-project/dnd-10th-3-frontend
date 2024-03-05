'use client';

import { BottomSheet } from '@/components/common/bottomSheet';
import { cn } from '@/lib/core';

export type OptionButtonProps = {
  variant: 'default' | 'warning';
  optionLabel: string;
  onClick: () => void;
};

type OptionBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  options: OptionButtonProps[];
};

const OptionButton = ({ variant, optionLabel, onClick }: OptionButtonProps) => {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-center h-xl [&+&]:border-t [&+&]:border-gray-100',
        variant === 'warning' ? 'text-warning' : 'text-gray-800',
      )}
      onClick={onClick}
    >
      {optionLabel}
    </button>
  );
};

const OptionBottomSheet = ({
  isOpen,
  onClose: closeSheetHandler,
  options,
}: OptionBottomSheetProps) => {
  return (
    <BottomSheet open={isOpen} onDismiss={closeSheetHandler}>
      {options.map(({ variant, optionLabel, onClick }) => (
        <OptionButton
          key={optionLabel}
          variant={variant}
          optionLabel={optionLabel}
          onClick={onClick}
        />
      ))}
    </BottomSheet>
  );
};

export default OptionBottomSheet;
