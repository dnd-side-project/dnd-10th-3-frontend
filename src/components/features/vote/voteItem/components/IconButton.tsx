import { ComponentProps } from 'react';

import Button from '@/components/common/button/Button';
import { IconType } from '@/components/common/icon/assets';
import { cn } from '@/lib/core';

type Props = { icon: IconType } & Omit<ComponentProps<typeof Button>, 'icon'>;

const IconButton = ({ icon, className }: Props) => {
  return <Button variant="empty" iconOnly icon={icon} className={cn('!p-0', className)} />;
};

export default IconButton;
