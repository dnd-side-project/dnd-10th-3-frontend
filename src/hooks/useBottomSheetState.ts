import { useState } from 'react';

const useBottomSheetState = <TBottomSheetType>() => {
  const [openedSheet, setOpenedSheet] = useState<TBottomSheetType | null>();

  const onOpenSheet = (bottomSheetType: TBottomSheetType) => {
    setOpenedSheet(bottomSheetType);
  };

  const onCloseSheet = () => {
    setOpenedSheet(null);
  };

  return { onOpenSheet, openedSheet, onCloseSheet };
};

export default useBottomSheetState;
