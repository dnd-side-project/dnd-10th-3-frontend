import { IconColor, IconType } from '../icon/assets';

// TODO : ButtonIcon과 공통적인 부분이 있을 것 같은데 재활용하면 좋을 것 같다.
export type InputIconProps =
  | {
      icon?: IconType;
      iconSide?: 'left' | 'right';
      iconColor?: IconColor;
    }
  | {
      icon: IconType;
      iconSide?: never;
      iconColor?: IconColor;
    };
