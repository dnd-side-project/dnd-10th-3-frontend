import React, { forwardRef } from 'react';
import type { BottomSheetProps as BaseBottomSheetProps } from 'react-spring-bottom-sheet';
import { BottomSheet as BaseBottomSheet } from 'react-spring-bottom-sheet';
import type { RefHandles } from 'react-spring-bottom-sheet/dist/types';

import 'react-spring-bottom-sheet/dist/style.css';
import './style.css';

export interface BottomSheetProps extends BaseBottomSheetProps {
  HeaderComponent?: React.ReactNode;
  FooterComponent?: React.ReactNode;
  // fixedMaxHeight?: number;
}
//test: rebase 후 push 할경우 실패 에러 체크
export const BottomSheet = forwardRef<RefHandles, BottomSheetProps>(
  (
    {
      open,
      onDismiss,
      HeaderComponent,
      FooterComponent,
      // fixedMaxHeight,
      children,
      ...props
    }: BottomSheetProps,
    ref,
  ) => {
    return (
      <BaseBottomSheet
        {...props}
        ref={ref}
        open={open}
        onDismiss={onDismiss}
        // snapPoints가 적용된 이유가 무엇인가요? 이걸 적용하지 않는다면 바텀시트의 height가 컨텐츠에 맞게 조정되네요?
        // snapPoints={({ maxHeight }) => fixedMaxHeight || maxHeight - maxHeight / 5}
        expandOnContentDrag
        header={HeaderComponent}
        footer={FooterComponent}
      >
        {children}
      </BaseBottomSheet>
    );
  },
);
BottomSheet.displayName = 'BottomSheet';
