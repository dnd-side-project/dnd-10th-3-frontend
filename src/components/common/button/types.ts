import { IconColor, IconType } from '../icon/assets';

export type LoadingProps = {
  isLoading?: boolean;
};

export type IconProps =
  | {
      icon?: IconType;
      iconSide?: 'left' | 'right' | 'both';
      iconOnly?: false;
      iconColor?: IconColor;
      iconSize?: number;
      children: React.ReactNode;
    }
  | {
      icon: IconType;
      iconSide?: never;
      iconOnly: true;
      iconColor?: IconColor;
      iconSize?: number;
      children?: never;
    };
