import { cva } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Typography } from '@/foundations/typography';

export type TabProps = {
  active?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  id?: string;
  children: ReactNode;
};

// TODO : active가 눌렸을때 LayoutShifting이 미묘하게 일어나는데 리팩토링해야함

const tabContainerVariants = cva(
  'flex h-lg min-w-fit grow cursor-pointer items-center justify-center text-gray-400  hover:text-gray-700 ',
  {
    variants: {
      active: {
        true: 'border-b-2 border-gray-700 text-gray-700',
      },
    },
  },
);

const Tab = ({ children, active, onClick }: TabProps) => {
  // active styling
  return (
    <div onClick={onClick} role="presentation" className={tabContainerVariants({ active })}>
      <Typography type={'body1'}>{children}</Typography>
    </div>
  );
};

export default Tab;
