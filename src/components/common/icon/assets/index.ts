import { colors } from '@/styles/theme';

import Add from './Add';
import Airplane from './Airplane';
import CaretUp from './CaretUp';
import Check from './Check';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import Clock from './Clock';
import Confirm from './Confirm';
import Divider from './Divider';
import FilledHeart from './FilledHeart';
import Heart from './Heart';
import Kakaotalk from './Kakaotalk';
import Link from './Link';
import More from './More';
import Mypage from './Mypage';
import Pencil from './Pencil';
import Photo from './Photo';
import Profile from './Profile';
import Remove from './Remove';
import Reply from './Reply';
import Search from './Search';
import Settings from './Settings';
import Share from './Share';
import Submit from './Submit';
import User from './User';
import Votebox from './Votebox';
import Warning from './Warning';
import X from './X';

export const iconMap = {
  filledHeart: FilledHeart,
  heart: Heart,
  kakaotalk: Kakaotalk,
  profile: Profile,
  submit: Submit,
  mypage: Mypage,
  search: Search,
  reply: Reply,
  chevronLeft: ChevronLeft,
  votebox: Votebox,
  settings: Settings,
  x: X,
  remove: Remove,
  clock: Clock,
  chevronRight: ChevronRight,
  check: Check,
  photo: Photo,
  more: More,
  link: Link,
  add: Add,
  chevronDown: ChevronDown,
  pencil: Pencil,
  airplane: Airplane,
  share: Share,
  user: User,
  divider : Divider,
  confirm: Confirm,
  warning: Warning,
  caretUp: CaretUp
};

export const COLORS = {
  'gray-1000': colors['gray'][1000],
  'gray-400': colors['gray'][400],
  'gray-300': colors['gray'][300],
  'gray-200': colors['gray'][200],
  'gray-100': colors['gray'][100],
  'primary-700': colors['primary'][700],
  warning: colors['warning'],
  white: '#ffffff',
};

export type IconType = keyof typeof iconMap;
export type IconColor = keyof typeof COLORS;
export const iconList = Object.keys(iconMap) as IconType[];
