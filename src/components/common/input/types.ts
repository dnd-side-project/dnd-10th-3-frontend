import { IconType } from '../icon/assets';
import { COLORS } from '../icon/Icon';


// TODO : ButtonIcon과 공통적인 부분이 있을 것 같은데 재활용하면 좋을 것 같다.
export type InputIconProps =
  | {
      icon?: IconType;
      iconSide?: 'left' | 'right';
      iconColor?: keyof typeof COLORS;
    }
  | {
      icon: IconType;
      iconSide?: never;
      iconColor?: keyof typeof COLORS;
    };
