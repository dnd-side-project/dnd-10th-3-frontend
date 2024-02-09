import Check from './Check';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import Clock from './Clock';
import FilledHeart from './FilledHeart';
import Heart from './Heart';
import Kakaotalk from './Kakaotalk';
import Link from './Link';
import More from './More';
import Photo from './Photo';
import Profile from './Profile';
import Remove from './Remove';
import Reply from './Reply';
import Search from './Search';
import Settings from './Settings';
import Submit from './Submit';
import User from './User';
import Votebox from './Votebox';
import X from './X';

export const iconMap = {
  filledHeart: FilledHeart,
  heart: Heart,
  kakaotalk: Kakaotalk,
  profile: Profile,
  submit: Submit,
  user: User,
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
};

export type IconType = keyof typeof iconMap;
export const iconList = Object.keys(iconMap) as IconType[];
