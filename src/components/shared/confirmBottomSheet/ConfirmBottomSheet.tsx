'use client';

import { BottomSheet } from '@/components/common/bottomSheet';
import { Typography } from '@/components/common/typography';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  PrimaryButton: React.ReactNode;
  SecondaryButton: React.ReactNode;
};

const ConfirmBottomSheet = ({
  isOpen,
  onClose: closeSheetHandler,
  title,
  description,
  PrimaryButton,
  SecondaryButton,
}: Props) => {
  return (
    <BottomSheet open={isOpen} onDismiss={closeSheetHandler}>
      <div className="flex flex-col gap-5xs px-3xs py-xs">
        <Typography type="title1">{title}</Typography>
        {description && (
          <Typography type="body3" className="text-gray-500">
            {description}
          </Typography>
        )}
        <div className="mt-3xs flex gap-4xs">
          {SecondaryButton}
          {PrimaryButton}
        </div>
      </div>
    </BottomSheet>
  );
};

export default ConfirmBottomSheet;
