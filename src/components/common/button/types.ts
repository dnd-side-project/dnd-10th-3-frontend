import { IconType } from '../icon/assets';
import { COLORS } from '../icon/Icon';

export type LoadingProps = {
  isLoading?: boolean;
};

export type IconProps =
  | {
      icon?: IconType;
      iconSide?: 'left' | 'right';
      iconOnly?: false;
      iconColor?: keyof typeof COLORS;
      iconSize?: number;
      children: React.ReactNode;
    }
  | {
      icon: IconType;
      iconSide?: never;
      iconOnly: true;
      iconColor?: keyof typeof COLORS;
      iconSize?: number;
      children?: never;
    };
