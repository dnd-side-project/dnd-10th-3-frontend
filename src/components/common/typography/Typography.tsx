import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

//TODO 폰트 추가 예정
const typographyVariants = cva('whitespace-pre-line text-wrap', {
  variants: {
    type: {
      heading1: 'text-[24px] font-bold leading-[145%]',
      heading2: 'text-[20px] font-bold leading-[145%]',
      heading3: 'text-[18px] font-bold leading-[155%]',
      heading4: 'text-[16px] font-bold leading-[155%]',
      title1: 'text-[20px] font-semibold leading-[155%]',
      title2: 'text-[18px] font-semibold leading-[155%]',
      title3: 'text-[16px] font-semibold leading-[155%]',
      title4: 'text-[14px] font-semibold leading-[155%]',
      title5: 'text-[12px] font-semibold leading-[155%]',
      body1: 'text-[18px] font-medium leading-[155%]',
      body2: 'text-[16px] font-medium leading-[155%]',
      body3: 'text-[14px] font-medium leading-[155%]',
      subLabel1: 'text-[16px] font-semibold leading-[155%]',
      subLabel2: 'text-[14px] font-semibold leading-[155%]',
      caption1: 'text-[12px] font-medium leading-[155%]',
      caption2: 'text-[8px] font-medium leading-[155%]',
      header1: 'text-[14px] font-medium leading-[145%] text-blue-50',
    },
  },
  defaultVariants: {
    type: 'body3',
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, type, ...props }, ref) => {
    return <p className={typographyVariants({ type, className })} ref={ref} {...props} />;
  },
);
Typography.displayName = 'Typography';
