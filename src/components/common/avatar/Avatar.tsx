import Image from 'next/image';

import { Icon } from '../icon';
import { IconColor } from '../icon/assets';

interface AvatarProps {
  size?: number;
  profileImage?: string;
  color?: IconColor;
}

export const Avatar = ({ size = 24, profileImage, color = 'gray-300' }: AvatarProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl"
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
