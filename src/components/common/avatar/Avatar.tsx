import Image from 'next/image';

import { cn } from '@/lib/core';

import { Icon } from '../icon';
import { IconColor } from '../icon/assets';

type AvatarProps = {
  size?: number;
  profileImage?: string;
  color?: IconColor;
  className?: string;
};

export const Avatar = ({ size = 24, profileImage, color = 'gray-300', className }: AvatarProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        'flex cursor-pointer items-center justify-center overflow-hidden rounded-xl',
        className,
      )}
    >
      {!!profileImage ? (
        <Image src={profileImage} width={size} height={size} alt="profile_image" />
      ) : (
        <Icon
          icon="user"
          width={`calc(${size} / 1.5)`}
          height={`calc(${size} / 1.5)`}
          color={color}
        />
      )}
    </div>
  );
};
